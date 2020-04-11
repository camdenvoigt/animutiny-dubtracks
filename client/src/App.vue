<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h3>Animutiny Dubtracks</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        @click.stop="signupDialog = true"
      >
        <span class="mr-2">Sign Up</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <YoutubePlayer video_url='https://www.youtube.com/embed/5wvTs-1jUFE'/>
    </v-content>

    <SignupPopover :showDialog="signupDialog" v-on:close-signup-dialog="closeSignupModal"/>
  </v-app>
</template>

<script>
import YoutubePlayer from './components/YoutubePlayer'
import SignupPopover from './components/SignupPopover'

export default {
  name: 'App',

  components: {
    YoutubePlayer,
    SignupPopover
  },

  data: () => ({
    signupDialog: false
  }),

  methods: {
    closeSignupModal () {
      this.signupDialog = false;
    }
  }
};
</script>
