<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Sign In</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="email"
                prepend-icon="person"
                label="Email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                v-model="password"
                prepend-icon="lock"
                label="Password"
                type="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click.prevent="submit">Sign In</v-btn>
            <v-btn router to="/register">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail is required',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >=6 || 'Password must be greater than 6 characters',
      ],
    }
  },
  methods: {
    submit: function() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        })
      }
    }
  }
}
</script>
