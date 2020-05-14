<template lang="pug">
    .scroll-table(:style="tableStyle")
        .rows-wrapper(:style="wrapperStyle")
            .table-row(v-for="(item, _) in renderData"
                    :style="{ backgroundColor: item.index % 2 === 1 ? evenBg : oddBg }"
                )
                .ceil(v-for="(col, ceilIdx) in columns"
                    :style="{ width: widths[ceilIdx] + 'px', height: lineHeight + 'px' }"
                ) {{ item[ col.key ] }}
</template>

<script>
    export default {
        name: "scroll-table",
        props: {
            data: Array,
            columns: Array,
            widths: Array, // define width of table ceil.
            rowNum: {
                type: Number,
                default: 5
            },
            lineHeight: {
                type: Number,
                default: 24
            }
        },
        computed: {
            renderData() {
                const start = this.firstDataIdx 
                const rowNum = this.rowNum + 1
                const end = start + rowNum
                const data = this.data.slice(start, end)
                if (data.length === rowNum) {
                    return data
                }
                const restLen = rowNum - data.length
                data.push(...this.data.slice(0, restLen))
                return data
            },
            wrapperStyle() {
                return {
                    transitionDuration: this.initing ? '0ms' : '950ms',
                    transform: this.initing ? 'translateY(0)' : 'translateY(-24px)'
                }
            },
            tableStyle() {
                return { height: rowNum * lineHeight + 'px' }
            },
            rowStyle() {
                
            }
        },
        data() {
            return {
                oddBg: '#cdf9f7',
                evenBg: '#26bda8',
                firstDataIdx: 0,
                initing: false,
                timer: null
            }
        },
        methods: {
            scrollLoop() {
                this.timer = setInterval(() => {
                    this.initing = true
                    if (this.firstDataIdx === this.data.length - 1) {
                        this.firstDataIdx = 0
                    } else {
                        this.firstDataIdx++
                    }
                    this.$nextTick(() => {
                        this.initing = false
                    })
                }, 2000)
            }
        },
        mounted() {
            this.scrollLoop()
        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>

<style scoped lang="less">
    .scroll-table {
        border: 1px solid red;
        overflow: hidden;

        .rows-wrapper {
            .table-row {
                display: flex;

                .ceil {
                    text-align: left;
                    box-sizing: border-box;
                    padding: 0 5px;
                }
            }
        }
    }
</style>
