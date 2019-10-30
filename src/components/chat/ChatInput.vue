<template>
    <div id="chat-input-group">
        <b-container>
            <b-row>
                <b-col>
                    <b-container align-v="end">
                        <b-row align="center">
                            <b-form-textarea
                                id="textarea-auto-height"
                                v-model.trim="text"
                                placeholder="Enter your message..."
                                rows="3"
                                max-rows="8"
                            ></b-form-textarea>
                        </b-row>
                        <b-row align="center">
                            <b-form-file
                                :state="Boolean(file)"
                                placeholder="Choose a file or drop it here..."
                                drop-placeholder="Drop file here..."
                                @change="handleFileUpload"
                            ></b-form-file>
                        </b-row> 
                    </b-container>
                </b-col>
                <b-col class="centered-position" cols="2">
                    <b-button size="lg" variant="outline-primary" @click="submit">Save</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "ChatInput",
    data() {
        return {
        file: '',
        text: '',
        errors: null
        };
    },
    computed: {
        isAnyData() {
            return !this.file || !this.text;
        }
    },
    methods: {
        handleFileUpload(event){
            this.file = event.target.files[0];
        },
        submit() {
            if(!this.text || this.text === '')
            {
                return;
            }
            const payload = {
                text: this.text
            };
            this.$store
                .dispatch("sendTextMessage", payload)
                .then(response => {
                    this.text = "",
                    this.$emit("success")
                }).catch(error => {
                if (typeof error.data === "string" || error.data instanceof String) {
                    this.errors = { error: [error.data] };
                } else {
                    this.errors = error.data;
                }
            });
        }
  }
}
</script>

<style>
    #chat-input-group{
        bottom: 0;
        position: fixed;
        width:100%;
    }
    .centered-position{
        text-align:center;
    }
</style>