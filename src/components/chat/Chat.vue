<template>
    <div id="chat-messages">
        <ul class="list-unstyled">
            <b-media v-for="(item, index) in items" :key="index" tag="li" >
                {{ item.textMessage }}
            </b-media>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Chat",
    computed: {
        items() {
            return this.$store.state.messages;
        }
    },
}
</script>

<style>
    #chat-messages{
        bottom: 110px;
        position: fixed;
        width:100%;
        text-align:center;
    }
</style>