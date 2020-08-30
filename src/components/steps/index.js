import Vue from 'vue'
import Steps from './Steps'

Steps.install = () => {
    Vue.component('steps', Steps)
}

export default Steps