<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants" :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant)"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorite(restaurant)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'

const dummyData = {
    "restaurants": [
        {
            "id": 81,
            "name": "A",
            "tel": null,
            "address": null,
            "opening_hours": null,
            "description": "www",
            "image": "https://i.imgur.com/CMdEy1g.jpeg",
            "viewCounts": 39,
            "createdAt": "2022-09-02T21:52:30.000Z",
            "updatedAt": "2022-09-15T07:55:26.000Z",
            "CategoryId": 11,
            "FavoritedUsers": [
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$.8Fh51CCtHSVL2soTn5u0O8/08a0t8fkbvtBouedlH3RHeFEKqkfe",
                    "isAdmin": false,
                    "image": "https://i.imgur.com/iO9H3N1.png",
                    "createdAt": "2022-07-13T07:58:49.000Z",
                    "updatedAt": "2022-09-15T07:55:44.000Z",
                    "Favorite": {
                        "UserId": 2,
                        "RestaurantId": 81,
                        "createdAt": "2022-09-11T14:16:23.000Z",
                        "updatedAt": "2022-09-11T14:16:23.000Z"
                    }
                },
                {
                    "id": 111,
                    "name": "test",
                    "email": "test@gmail.com",
                    "password": "$2a$10$nFDBPWdglZsulNpuUxi2lOot4KbqYQo9E4bFuv5NiJKdeh9Usjhsi",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-14T13:40:44.000Z",
                    "updatedAt": "2022-09-14T13:40:44.000Z",
                    "Favorite": {
                        "UserId": 111,
                        "RestaurantId": 81,
                        "createdAt": "2022-09-14T13:41:01.000Z",
                        "updatedAt": "2022-09-14T13:41:01.000Z"
                    }
                }
            ],
            "isFavorited": false,
            "FavoriteCount": 2
        }
    ]
}

export default {
  data (){
    return{
      restaurants: dummyData.restaurants
    }
  },
  components: {
    NavTabs
  },
  methods: {
    addFavorite (target) {
      this.restaurants.filter((restaurant)=> {
        if(restaurant.id === target.id)
        target.isFavorited = true
      })
    },
    deleteFavorite (target) {
      this.restaurants.filter((restaurant)=> {
        if(restaurant.id === target.id)
        target.isFavorited = false
      })
    },
  }
}
</script>
