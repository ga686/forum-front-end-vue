<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
    :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link class="btn btn-primary btn-border mr-2" :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }">Dashboard</router-link>
      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited" @click.stop.prevent="deleteFavorite(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        v-else @click.stop.prevent="addFavorite(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked" @click.stop.prevent="deleteLike(restaurant.id)"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        v-else @click.stop.prevent="addLike(restaurant.id)"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { Toast } from '../utils/helpers'
import usersAPI from './../apis/users'

export default{
  data () {
    return {
      restaurant: []
    }
  },
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite ({ restaurantId })

        if(data.status === "error"){
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳原有資料
          isFavorited: true
        }


      }catch(err){
        console.error(err)
        Toast.fire({
          icon: 'warning',
          title: '無法加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite (restaurantId) {
      try{
        const data = usersAPI.deleteFavorite({restaurantId})
        
        if( data.status === "error" ){
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳原有資料
          isFavorited: false
        }
      }catch(err){
        console.error(err)
        Toast.fire({
          icon: 'warning',
          title: '無法移除最愛，請稍後再試'
        })
      }
    },
    async addLike (restaurantId) {
      try{
        const data = usersAPI.addLike({restaurantId})
        
        if(data.status === "error"){
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
      }catch(err){
        console.error(err)
        Toast.fire({
          icon: 'warning',
          title: '無法按讚，請稍後再試'
        })
      }
    },
    deleteLike (restaurantId) {
      try{
        const data = usersAPI.deleteLike({restaurantId})
        
        if(data.status === "error"){
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
      }catch(err){
        console.error(err)
        Toast.fire({
          icon: 'warning',
          title: '無法收回讚，請稍後再試'
        })
      }
    }
  },
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
}
</script>