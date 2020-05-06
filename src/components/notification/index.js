import Vue from 'vue'
import Notification from './Notification'

Notification.newInstance = () => {
    const notificationInstance = new Vue({
        el: document.createElement('div'),
        render(h) {
            return h(Notification, {})
        }
    })

    document.body.appendChild(notificationInstance.$el)

    return notificationInstance.$children[0]
}

function isObject(val) {
    return val !== null && typeof val === 'object'
}

function parseOpts(opts) {
    return isObject(opts) ? opts : { content: opts }
}

let instance
function getNotificationInstance() {
    instance = instance || Notification.newInstance()

    return instance
}

function Notify(opts) {
    const options = parseOpts(opts)
    const instance = getNotificationInstance()
    instance.add(options)
}

Notify.install = () => {
    Vue.prototype.$notice = Notify
}

export default Notify