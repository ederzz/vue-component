<template lang="pug">
    .home
        notification
</template>

<script>

export default {
    name: "Home",
    components: {
    },
    mounted() {
        console.log('start render notification.')
        this.$notice('测试消息通知')
        this.$notice({
            content: '测试消息通知2',
            duration: 1000
        })
    }
}
</script>
