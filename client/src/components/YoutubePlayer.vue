<template>
  <iframe width="560" height="315" 
  :src="video_url"
  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</template>

<script>
export default {
  props: {
    video_url: String
  }
}
</script>

<style scoped>

</style>