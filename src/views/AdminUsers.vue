<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-if="user.id !== currentUser.id"
              @click.stop.prevent="toggleUserRole (user.id)"
            >
              {{user.isAdmin ? 'set as user' : 'set as admin'}}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import AdminNav from './../components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default{
  data () {
    return{
      users: []
    }
  },
  components: {
    AdminNav
  },
  methods: {
    async fetchUsers () {
      try{
        const {data}= await adminAPI.getUsers()

        if(data.status === "error"){
          throw new Error(data.message)
        }

        return this.users = data.users
      }catch(err){
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法更新資訊，請稍後再試'
        })
      }
    },
    async toggleUserRole (userId, isAdmin) {
      try {
        
        const { data } = await adminAPI.updateCurrentUser({userId,  isAdmin: (!isAdmin).toString() })

        if(data.status === 'error'){
          throw new Error(data.message)
        }

        this.users.filter((user) => {
          if(user.id === userId){
            return user.isAdmin = !user.isAdmin
          }
        })
        
      }catch(err){
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法更新資訊，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    this.fetchUsers()
  }
}
</script>
