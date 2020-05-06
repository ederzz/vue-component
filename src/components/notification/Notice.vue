<template lang="pug">
    .notice {{ content }}
</template>

<script>
    export default {
        name: "notice",
        props: {
            content: {
                type: String,
                default: '默认内容'
            },
            duration: {
                type: Number,
                default: 1500
            },
            name: {
                type: String,
                required: true
            }
        },
        methods: {
            close() {
                console.log('close notice component.')
                this.$parent.close(this.name)
            }
        },
        mounted() {
            setTimeout(() => {
                this.close()
            }, this.duration)
        }
    }
</script>

<style scoped lang="scss">
    .notice {
        color: red;
    }
</style>
