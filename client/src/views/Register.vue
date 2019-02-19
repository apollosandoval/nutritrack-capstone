<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                prepend-icon="person"
                label="Name"
              ></v-text-field>
              <v-text-field
                v-model="email"
                prepend-icon="mail"
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
            <v-btn>Submit</v-btn>
            <v-btn @click="clearForm">Cancel</v-btn>
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
      name: '',
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
      // TODO: fill in register submit
    },
    clearForm: function() {
      this.name = '';
      this.email = '';
      this.password = '';
    },
  },
}
</script>
