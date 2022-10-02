import { apiHelper } from './../utils/helpers'

export default {
  categories: {
    get () {
      return apiHelper.get('/admin/categories')
    },
    create ({ data }) {
      return apiHelper.post('/admin/categories', data )
    },
    update ({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, name)
    },
    delete ({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    }
  },
  restaurants: {
    getDetail ({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get () {
      return apiHelper.get('/admin/restaurants')
    },
    delete ({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    update ({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    }
  },
  getUsers () {
    return apiHelper.get('/admin/users')
  },
  updateCurrentUser ({ userId, isAdmin }) {
    return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
  }
}