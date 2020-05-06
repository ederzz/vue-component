<template lang="pug">
    .home
        notification
</template>

<script>
import Notification from "@/components/notification"

export default {
    name: "Home",
    components: {
    },
    mounted() {
        console.log('start render notification.')
        Notification('测试消息通知')
        Notification({
            content: '测试消息通知2',
            duration: 1000
        })
    }
}
</script>
