<template>
  <b-modal v-model="show" hide-header hide-footer no-close-on-backdrop no-close-on-esc>
    <b-tabs v-model="index">
      <b-tab title="Login" active>
        <LoginForm :registered="registered" @close="close" />
      </b-tab>
      <b-tab title="Register" >
        <RegistrationForm @success="success" @close="close" />
      </b-tab>
    </b-tabs>
  </b-modal>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import RegistrationForm from "./RegistrationForm.vue";

export default {
  name: "AuthModal",
  components: {
    LoginForm,
    RegistrationForm
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      index: 0,
      registered: false
    };
  },
  methods: {
    success() {
      this.registered = true;
      this.index = 0;
    },
    close() {
      this.$store.commit("hideAuthModal");
    }
  }
};
</script>