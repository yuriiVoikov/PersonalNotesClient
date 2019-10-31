<template>
  <div id="app">
    <NavBar />
    <AuthModal :show="showAuthModal" />
    <Chat />
    <ChatInput :show="!showAuthModal"/>
  </div>
</template>

<script>
import NavBar from "./components/authorization/NavBar.vue";
import AuthModal from "./components/authorization/AuthModal.vue";
import ChatInput from "./components/chat/ChatInput.vue";
import Chat from "./components/chat/Chat.vue";

export default {
  name: "app",
  components: {
    NavBar,
    AuthModal,
    Chat,
    ChatInput
  },
  computed: {
    showAuthModal() {
      return this.$store.state.showAuthModal;
    }
  }
};
</script>