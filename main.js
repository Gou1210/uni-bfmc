import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// Vue.prototype.serverUrl = "http://127.0.0.1:8080/"
Vue.prototype.serverUrl = "http://123.56.154.185:8080/"
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
