import Vue from 'vue'
import BmapHeatMap from './bmapHeatMap'

BmapHeatMap.install = () => {
    Vue.component('bmap-heatmap', BmapHeatMap)
}

export default BmapHeatMap