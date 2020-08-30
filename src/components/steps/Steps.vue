<template lang="pug">
    .steps
        div(
            v-for="(item, idx) in config"
            :key="idx"
            :class="stepCls( idx )"
        )
            .step__head
                .div(
                    v-if="idx < config.length - 1"
                    :class="{ step__line: true, active: idx < active - 1 }"
                )
                .step__icon
                    .step__icon--inner {{ idx + 1 }}
            .step__main
                .step__title {{ item.title }}
</template>

<script>
export default {
    props: {
        config: {
            type: Array,
            default: () => ([])
        },
        active: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
        }
    },
    watch: {
    },
    methods: {
        stepCls(idx) {
            console.log({
                step: true,
                'is-end': idx === this.config.length - 1,
                'is-process': idx === this.active,
                'is-success': idx < this.active
            })
            return {
                step: true,
                'is-end': idx === this.config.length - 1,
                'is-process': idx === this.active,
                'is-success': idx < this.active
            }
        }
    },
}
</script>

<style lang="less" scoped>
    @success_cor: rgb(31, 221, 31);
    @process_cor: #000;
    @primary_cor: #ccc;

    .steps {
        display: flex;

        .step {
            flex-basis: 50%;
            display: block;
            color: @primary_cor;
            border-color: @primary_cor;

            &__head {
                width: 100%;
                position: relative;
            }

            &__line {
                height: 2px;
                background: @primary_cor;
                position: absolute;
                top: 11px;
                width: 100%;

                &.active {
                    background: @success_cor;
                }
            }

            &__icon {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                border-width: 1px;
                border-style: solid;
                box-sizing: border-box;
                z-index: 1;
                position: relative;
                background: #fff;
            }

            &__main {
                text-align: left;
            }

            &.is-end {
                flex-basis: auto!important;
                flex-shrink: 0;
            }

            &.is-process {
                color: @process_cor;
                border-color: @process_cor;
            }

            &.is-success {
                color: @success_cor;
            }
        }
    }
</style>
