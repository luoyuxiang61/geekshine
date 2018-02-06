<template>
  <div class="container">
    <input type="text" v-model="videoLink">
    <button @click="go">download now!</button>
    <a v-bind:href="downLoadUrl">gogogo</a>
  </div>
</template>
<script>
export default {
  name: 'lyx',
  data: function () {
    return {
      videoLink: ' '
    }
  },
  computed: {
    downLoadUrl: function () {
      return `http://geekshine.io:3000/download720Http?url=${this.videoLink}`
    }
  },
  methods: {
    go: function () {
      console.log(this.downLoadUrl)
    }
  }
}
</script>
<style scoped>

</style>
