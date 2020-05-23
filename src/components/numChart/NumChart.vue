<template lang="pug">
    .num-chart 
        .ceil(v-for="item in numAry" :class="{ 'num-wrapper': item.type === 'num' }") 
            div(v-if="item.type === 'num'" :style="gerNumItemStyle(item.value)" class="num") 
                span(v-for="n in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="n") {{ n }}
            div(v-else) {{ item.value }}
</template>

<script>
export default {
    props: {
        num: Number, // 数字
        digit: Number // 位数
    },
    data() {
        return {
            numAry: []
        }
    },
    watch: {
        num() {
            this.genNumAry()
        },
        digit() {
            this.genNumAry()
        }
    },
    methods: {
        gerNumItemStyle(n) {
            return {
                transform: `translate(0, ${ -n * 70 }px)`
            }
        },
        genNumAry() {
            const numStr = this.num.toString()
            let i = 0
            this.numAry = ('0'.repeat(this.digit - numStr.length) + numStr).split('').reverse().reduce((ary, n) => {
                if (i === 2) {
                    ary.push({
                        value: n,
                        type: 'num'
                    }, {
                        value: ',',
                        type: 'mark'
                    })
                    i = 0
                } else {
                    ary.push({
                        value: n,
                        type: 'num'
                    })
                    i++
                }
                return ary
            }, []).reverse()

        }
    },
    mounted() {
        this.genNumAry()
    },
}
</script>

<style lang="less" scoped>
    .num-ceil {
        border: 1px solid #dddddd;
        background: #fafafa;
    }

    .item {
        width: 50px;
        height: 70px;
        line-height: 70px;
    }

    .num-chart {
        display: flex;

        .ceil {
            text-align: center;
            color: #2D7CFF;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 54px;
            font-weight: 500;
            margin-left: -10px;
            .item;
            
            &.num-wrapper {
                overflow: hidden;
                margin-right: 10px;
                margin-left: 0;
                .num-ceil;

                .num {
                    display: flex;
                    flex-direction: column;
                    transition: all .5s ease-out;

                    >span {
                        text-align: center;
                        display: block;
                        .item;
                    }
                }
            }
        }
    }
</style>
