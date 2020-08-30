import BmapFence from './BmapFence'
import Vue from 'vue'

BmapFence.install = () => {
    Vue.component('bmap-fence', BmapFence)
}

export default BmapFence