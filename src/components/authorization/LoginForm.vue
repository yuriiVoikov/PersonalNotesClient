<template>
  <b-form @submit.prevent="login">
    <b-alert
      variant="danger"
      :show="error !== null"
      dismissible
      @dismissed="error = null"
    >{{ error }}</b-alert>
    <p>Login with your UserName and Password.</p>
    <b-form-group label="UserName">
      <b-form-input v-model.trim="username" />
    </b-form-group>
    <b-form-group label="Password">
      <b-form-input v-model.trim="password" type="password" />
    </b-form-group>
    <b-form-group>
      <b-button variant="primary" type="submit" :disabled="loading">Login</b-button>
      <b-button variant="default" @click="close" :disabled="loading">Cancel</b-button>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: "LoginForm",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      error: null,
      isLoginSuccessful: false
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },

  },
  methods: {
    login() {
      const payload = {
        username: this.username,
        password: this.password
      };
      let isLoginSuccessful = false;
      this.$store
        .dispatch("login", payload)
        .then(() => {
          this.error = null;
          this.username = "";
          this.password = "";
          this.isLoginSuccessful = true;
        })
        .catch(error => {
          this.error = error.data;
        });
      this.getMessages();
    },
    close() {
      this.$emit("close");
    },
    getMessages() {
      if (this.isLoginSuccessful) {
        console.log("in");
        this.$store.dispatch("getMessages");
      }
      
    }
  }
};
</script>