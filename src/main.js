import Vue from 'vue'
import router from './router'

// --- Main app component -->
import App from './App.vue'

// --- Custom mixins for Vue --->
import WaterwheelProvider from './services/waterwheel.service'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const waterwheel = new WaterwheelProvider({
  uri: 'http://local.decoupledkit.com',
  client_id: 'be2557eb-bd73-4606-9a45-30b94a07019d',
  client_secret: 'apitest',
  username: 'apitest',
  password: 'apitest'
})

Vue.use(waterwheel)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
