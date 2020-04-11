<template>
  <v-dialog v-model="showDialog" max-width="500" @click:outside="$emit('close-signup-dialog')">
    <v-card>
          <v-card-title>
            <span class="headline">Sign Up</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field 
                    v-model="username"
                    label="Username*" 
                    :rules="usernameRules"
                    :counter="16"
                    required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field 
                    v-model="password"
                    label="Password*" 
                    :rules="passwordRules"
                    :counter="10"
                    type="password"
                    required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="$emit('close-signup-dialog')">Close</v-btn>
            <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
          </v-card-actions>
        </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:['showDialog'],
  data:() => ({
    valid: true,
    username: '',
    password: '',
    usernameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 16) || 'Name must be less than 10 characters',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 10) || 'Name must be more than 10 characters'
    ]
  }),
  methods: {
    submit() {
      //TODO: Submit data and exit modal
      this.$emit('close-signup-dialog')
    }
  }
}
</script>