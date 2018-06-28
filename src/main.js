import Vue from 'vue'
import router from './router'

// --- Main app component -->
import App from './App.vue'

// --- Custom mixins for Vue --->
import WaterwheelProvider from './services/waterwheel.service'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({ uri: 'http://localhost:8082/graphql' })
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.config.productionTip = false

const waterwheel = new WaterwheelProvider({
  uri: 'http://local.decoupledkit.com',
  client_id: 'be2557eb-bd73-4606-9a45-30b94a07019d',
  client_secret: 'apitest',
  username: 'apitest',
  password: 'apitest'
})

Vue.use(waterwheel)
Vue.use(VueApollo)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
