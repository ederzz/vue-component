<template lang="pug">
    .home
        notification
        scroll-table(:widths="widths" :data="tableData" :columns="columns")
        num-chart(:digit="8" :num="num")
</template>

<script>

export default {
    name: "Home",
    components: {
    },
    data() {
        return {
            widths: [ 100, 100, 100 ],
            tableData: [
                {
                    key1: '1key1',
                    key2: '1key2',
                    key3: '1key3',
                    index: 1
                },
                {
                    key1: '2key1',
                    key2: 'key2',
                    key3: 'key3',
                    index: 2
                },
                {
                    key1: '2key1',
                    key2: 'key2',
                    key3: 'key3',
                    index: 3
                },
                {
                    key1: '3key1',
                    key2: 'key2',
                    key3: 'key3',
                    index: 4
                },
                {
                    key1: '4key1',
                    key2: 'key2',
                    key3: 'key3',
                    index: 5
                },
                {
                    key1: '5key1',
                    key2: 'key2',
                    key3: 'key3',
                    index: 6
                },
                {
                    key1: '6key1',
                    key2: 'key2',
                    key3: 'key3',
                    index: 7
                },
                {
                    key1: '7key1',
                    key2: 'key2',
                    key3: 'key3',
                    index: 8
                },
            ],
            columns: [
                {
                    key: 'key1'
                },
                {
                    key: 'key2'
                },
                {
                    key: 'key3'
                },
            ],
            num: 45678
        }
    },
    mounted() {
        console.log('start render notification.')
        this.$notice('测试消息通知')
        this.$notice({
            content: '测试消息通知2',
            duration: 1000
        })
        setInterval(() => {
            this.num += 2435
        }, 2000)
    }
}
</script>
