<template>
  <div class="video-player-container">
    <iframe class="video-iframe" 
      width="670" height="380" 
      :src="video_url"
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: {
    video_url: String
  }
}
</script>

<style scoped>
.video-player-container {
  position: absolute;
  top: 15%;
  left: 5%;
}
</style>