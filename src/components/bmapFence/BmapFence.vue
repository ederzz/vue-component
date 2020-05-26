<template lang="pug">
    .bmap-fence
        .fence-types
            .type(
                v-for="t in types"
                :class="{ active: fenceType === t }"
                @click="switchFenceType(t)"
            ) {{ t }}
        //- 绘制circle的画布
        .circle-canvas(
            v-show="showCircleCanvas"
        )
        baidu-map(
            class="map"
            v-bind="$props"
            v-on="$listeners"
            :double-click-zoom="false"
            @click="paint"
            @dblclick="endPaint"
            @mousemove="fillLastPoint"
        )
            bm-polygon(
                v-for="item in fences"
                :path="item.vertices" 
                stroke-color="blue" 
                :stroke-opacity="0.5" 
                :stroke-weight="2" 
                :editing="true" 
            ) 
        //- 使用mask
</template>

<script>
    function checkSamePoints(a, b) {
        return a.lng === b.lng && a.lat === b.lat
    }

    export default {
        props: {
            // TODO: 可编辑
            center: {
                type: Object,
                default() {
                    return {
                        lng: 120.209186,
                        lat: 30.294751
                    }
                }
            },
            zoom: {
                type: Number,
                default: 12
            },
            maxZoom: {
                type: Number,
                default: 22
            },
            minZoom: {
                type: Number,
                default: 3
            },
            dragging: {
                type: Boolean,
                default: true
            },
            types: {
                type: Array,
                default() {
                    return [ 'line', 'polygon', 'circle' ]
                }
            }
        },
        data() {
            return {
                fenceType: '',
                fences: [],
                isEndPaint: false
            }
        },
        computed: {
            isPaint() { // 绘制直线、多边形中
                return this.fenceType === 'line' || this.fenceType === 'polygon'
            },
            showCircleCanvas() {
                return this.fenceType === 'circle'
            }
        },
        methods: {
            switchFenceType(t) {
                if (t !== this.fenceType) {
                    this.fenceType = t
                    if (!this.isEndPaint) {
                        this.isEndPaint = true
                        const end = this.fences.length - 1
                        this.fences = this.fences.slice(0, end)
                    }
                }
            },
            paint({ point }) { // 绘制点
                console.log('点击')
                if (!this.isPaint) return
                if (this.isEndPaint) { // 新围栏
                    this.isEndPaint = false
                    this.fences = [ ...this.fences, {
                        type: this.fenceType,
                        vertices: [ point ]
                    } ]
                } else {
                    const idx = this.fences.length - 1
                    const vertices = this.fences[ idx ].vertices
                    if (!checkSamePoints(point, vertices[ vertices.length - 2 ])) { // TODO: 直接push不能触发dbclick事件
                        vertices.push( point )
                    }
                }
            },
            endPaint() { // 结束绘制
                console.log('结束绘制')
                if (this.isEndPaint) return
                this.isEndPaint = true
                const fence = this.fences[ this.fences.length - 1 ]
                fence.vertices = fence.vertices.slice(0, fence.vertices.length - 1)

                if (this.fenceType === 'polygon' && fence.vertices.length < 3) {
                    alert('多边形围栏顶点不能少于3个') 
                    const end = this.fences.length - 1
                    this.fences = this.fences.slice(0, end)
                }
                // TODO: 判断是否交叉 1.@turf/kinks 2.自适应
            },
            fillLastPoint({ point }) { // 围栏最后一个点
                if (!this.isPaint || this.isEndPaint) return
                const { vertices } = this.fences[ this.fences.length - 1 ]
                if (vertices.length === 1) {
                    vertices.push( point )
                } else {
                    this.$set(vertices, vertices.length - 1, point)
                }
            },
            // 绘制圆形围栏 TODO:

        }
    }
</script>

<style scoped lang="less">
    .bmap-fence {
        width: 100%;
        height: 600px;
        position: relative;

        .circle-canvas {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border: 1px solid red;
        }

        .fence-types {
            position: absolute;
            right: 5px;
            top: 5px;
            z-index: 99;
            display: flex;
            background: #fff;
            border-radius: 4px;
            padding: 10px 5px;

            .type {
                margin-right: 10px;

                &.active {
                    color: rgb(47, 218, 47);
                }
            }
        }

        .map {
            width: 100%;
            height: 100%;
        }
    }
</style>
