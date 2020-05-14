import Vue from 'vue'
import ScrollTable from './ScrollTable'

ScrollTable.install = () => {
    Vue.component('scroll-table', ScrollTable)
}

export default ScrollTable