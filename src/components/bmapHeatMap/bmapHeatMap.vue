<template lang="pug">
    .bmap-heatmap    
        baidu-map(
            class="map"
            v-bind="$props"
            v-on="$listeners"
            @ready="initMap"
        )
</template>

<script>
export default {
    props: {
        center: {
            type: Object,
            default() {
                return {
                    lng: 120.209186,
                    lat: 30.2
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
        dataSet: {
            type: Object,
            default() {
                return {
                    max: 100,
                    data: []
                }
            }
        },
        opts: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            map: null,
            heatmapOverlay: null
        }
    },
    watch: {
        dataSet(val) {
            this.heatmapOverlay.setDataSet(val)
        },
        opts(val) {
            this.heatmapOverlay.setOptions(val)
        }
    },
    methods: {
        initMap({ map }) {
            this.map = map
            this.initHeatMap()
        },
        initHeatMap() {
            this.heatmapOverlay = new window.BMapLib.HeatmapOverlay()
            this.map.addOverlay(this.heatmapOverlay)

            this.heatmapOverlay.setDataSet(this.dataSet)
            this.heatmapOverlay.setOptions(this.opts)
        },
        toggle() {
            this.heatmapOverlay.toggle()
        }
    },
}
</script>

<style lang="less" scoped>
.bmap-heatmap {
    width: 100%;
    height: 600px;
    position: relative;

    .map {
        width: 100%;
        height: 100%;
    }
}
</style>

