<template>
    <div>
        <b-media v-for="item in items" v-bind:key="item" tag="li" >
            {{ item.TextMessage }}
        </b-media>
    </div>
</template>

<script>
export default {
    name: "Chat",
    items() {
      return this.$store.state.messages;
    }
}
</script>