import Vue from 'vue'
import App from './App.vue'
import { WaterwheelProvider } from './services/waterwheel.service'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  provide: WaterwheelProvider.provide(),
}).$mount('#app')
