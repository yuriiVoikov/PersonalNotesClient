<template>
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>PersonalNotes</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item v-if="isAuthenticated" @click="logout">Logout</b-nav-item>
            <b-nav-item v-else @click="login">Login / register</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  name: "NarBar",
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    login() {
      this.$store.commit("showAuthModal");
    },
    logout() {
      this.$store.dispatch("logout")
    }
  }
};
</script>