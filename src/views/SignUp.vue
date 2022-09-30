<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          v-model="name"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          v-model="email"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          v-model="password"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          v-model="passwordCheck"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled = 'isProcessing'
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import { Toast } from '../utils/helpers'
import authorization from '../apis/authorization' 

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit () {
      try {

        if(this.name === '' || this.email ==='' || this.password ==='' || this.passwordCheck === ''){
          Toast.fire({
            icon: 'warning',
            title: '請填寫所有欄位'
          })
          return
        }

        if(this.password !== this.passwordCheck){
          Toast.fire({
            icon: 'warning',
            title: '請確認密碼一致'
          })
          return
        }   

        const { data } = await authorization.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        })

        this.isProcessing = true

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'restaurants' })
      }catch(err){
        this.isProcessing = false
        console.log('error',err)
        Toast.fire({
          icon: 'warning',
          title: `${err.message}，無法註冊`
        })
        this.name = ''
        this.email = ''
        this.password = ''
        this.passwordCheck = ''
      }
    }
  }
}
</script>