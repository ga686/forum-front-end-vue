<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{comment.User.name}}
          </a>
          
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
          {{comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>
<script>
import { fromNowFilter } from './../utils/mixins'
import restaurantsAPI from './../apis/restaurants'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'


export default{
  props: {
    restaurantComments:{
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilter],
  methods: {
    async handleDeleteButtonClick (commentId) {
      try{
        // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
        const { data } = await restaurantsAPI.deleteComments({commentId})

        if(data.status === "error"){
          throw new Error(data.message)
        }
        this.$emit('after-delete-comment', commentId)
      }catch(err){
        console.log('error',err)
        Toast.fire({
          icon: 'warning',
          title: '無法找到評論，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>