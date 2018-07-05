import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import DrupalCrud from './components/DrupalCrud.vue'
import ApiMockData from './components/ApiMockData.vue'
import GraphqlMulti from './components/GraphqlMulti.vue'
import GraphqlSingle from './components/GraphqlSingle.vue'
import Chatbot from './components/Chatbot.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'crud', path: '/crud', component: DrupalCrud },
    { name: 'mock', path: '/mock', component: ApiMockData },
    { name: 'gqlm', path: '/graphql/multi', component: GraphqlMulti },
    { name: 'gqls', path: '/graphql/single', component: GraphqlSingle },
    { name: 'chat', path: '/chatbot', component: Chatbot },
  ]
})