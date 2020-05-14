<template lang="pug">
    .notification 测试
        notice(v-for="item in notices" 
            :content="item.content" 
            :duration="item.duration" 
            :name="item.name"
        )
</template>

<script>
import Notice from './Notice.vue'

// TODO: transition 添加过渡动画
const now = Date.now
let seed = 0
const getUUid = () => `notice_${ now }_${ seed++ }`

export default {
    name: "notification",
    components: {
        Notice
    },
    data: function () {
        return {
            notices: []
        }
    },
    methods: {
        add({ name = getUUid(), content = '默认内容', duration = 2000 }) {
            // new notice
            console.log('add notice.')
            this.notices.push({
                name,
                content,
                duration
            })
        },
        close(name) {
            const index = this.notices.findIndex(d => d.name === name) 
            this.notices.splice(index, 1)
        }
    }
}
</script>

<style scoped lang="scss">

</style>
