import Vue from 'vue'
import NumChart from './NumChart'

NumChart.install = () => {
    Vue.component('num-chart', NumChart)
}

export default NumChart