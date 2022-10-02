<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantNavPills :categories="categories"/>
    <Spinner v-if="isProcessing"/>
    <template v-else>
        <h1 class="mt-5">
          首頁 - 餐廳列表
        </h1>
        <div class="row">
          <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
        </div>
        <RestaurantsPagination
            v-if="totalPage.length > 1"
            :current-page="currentPage"
            :total-page="totalPage"
            :category-id="categoryId"
            :previous-page="previousPage"
            :next-page="nextPage"
          />
        <div v-if="restaurants.length < 1">此類別無餐廳資料</div>
    </template>
  </div>
</template>
<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantNavPills from './../components/RestaurantNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'
import restaurantsAPI from './../apis/restaurants'
import {Toast} from './../utils/helpers'
import Spinner from '../components/Spinner'

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantsPagination,
    Spinner
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isProcessing: true
    }
  },
  created () {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  beforeRouteUpdate (to, from, next) {
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchRestaurants ({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId
        })

        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = response.data

        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
        this.restaurants.filter((restaurant)=> { 
          if(restaurant.Category === null){ 
            return restaurant.Category =  {name: "未分類"}
          } 
        })
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
  }
}

</script>