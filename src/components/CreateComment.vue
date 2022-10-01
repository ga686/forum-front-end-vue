<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        class="form-control"
        rows="3"
        name="text"
        v-model="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import restaurantsAPI from './../apis/restaurants'
import { v4 as uuidv4 } from "uuid"
import { Toast } from '../utils/helpers'

export default {
  data () {
    return {
      text: ''
    }
  },
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  methods: {
    async handleSubmit () {
      try{
        this.$emit('after-create-comment', {
          commentId: uuidv4(), // 尚未串接 API 暫時使用隨機的 id
          restaurantId: this.restaurantId,
          text: this.text
        })
        const data  = restaurantsAPI.addComments({
          commentId: uuidv4(), // 尚未串接 API 暫時使用隨機的 id
          restaurantId: this.restaurantId,
          text: this.text
        })

        if(data.status === "error"){
          throw new Error(data.message)
        }

        this.text = '' // 將表單內的資料清空
      }catch(err){
        console.error(err)
        Toast.fire({
          icon: 'warning',
          title: '無法新增評論，請稍後再試'
        })
      }
    }
  }
}
</script>
