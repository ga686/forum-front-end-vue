<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantNavPills :categories="categories"/>
    <h1 class="mt-5">
      首頁 - 餐廳列表
    </h1>
    <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
  </div>
</template>
<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantNavPills from './../components/RestaurantNavPills'

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
            "viewCounts": 34,
            "createdAt": "2022-09-02T21:52:30.000Z",
            "updatedAt": "2022-09-11T14:20:53.000Z",
            "CategoryId": 11,
            "Category": {
                "id": 11,
                "name": "SOUP",
                "createdAt": "2022-09-02T21:17:08.000Z",
                "updatedAt": "2022-09-02T21:17:08.000Z"
            },
            "isFavorited": false,
            "isLiked": true
        }
    ],
    "categories": [
        {
            "id": 11,
            "name": "SOUP",
            "createdAt": "2022-09-02T21:17:08.000Z",
            "updatedAt": "2022-09-02T21:17:08.000Z"
        },
        {
            "id": 21,
            "name": "GARNISH",
            "createdAt": "2022-09-02T21:17:21.000Z",
            "updatedAt": "2022-09-02T21:17:21.000Z"
        },
        {
            "id": 31,
            "name": "MEAT  ",
            "createdAt": "2022-09-02T21:17:26.000Z",
            "updatedAt": "2022-09-02T21:17:26.000Z"
        },
        {
            "id": 41,
            "name": "FISH",
            "createdAt": "2022-09-02T21:17:30.000Z",
            "updatedAt": "2022-09-02T21:17:30.000Z"
        },
        {
            "id": 51,
            "name": "DRINK",
            "createdAt": "2022-09-02T21:17:34.000Z",
            "updatedAt": "2022-09-02T21:17:34.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1
    ],
    "prev": 1,
    "next": 1
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1

    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }

  }
}

</script>