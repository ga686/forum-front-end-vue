import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurant ({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurants ({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds () {
    return apiHelper.get('/restaurants/feeds', {
    headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants () {
    return apiHelper.get('/restaurants/top', {
    headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addComments (comments) {
    return apiHelper.post('/comments', comments ,{
    headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteComments ({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`,{
    headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}