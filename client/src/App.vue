<template>
  <div id="app">
    <YoutubePlayer video_url='https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG'/> 
  </div>
</template>

<script>
import YoutubePlayer from './components/YoutubePlayer.vue'

export default {
  name: 'App',
  components: {
    YoutubePlayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
