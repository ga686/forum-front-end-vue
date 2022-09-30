<template>
  <div class="container py-5">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="name"
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        @submit.stop.prevent="handleSubmit"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script>
export default{
  data () {
    return{
      id: 0,
      image: '',
      name: '',
      email: '',
    }
  },
  methods: {
    setUser (userId) {
      const { id, image, name, email } = this.currentUser
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: 'not-found' })
        return
      }
      this.id = id
      this.name = name
      this.email = email
      this.image = image
    },
    handleFileChange (e) {
      const { files } = e.target

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.image = ''
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0])
        this.image = imageURL
      }
    },
    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  }
}
</script>
