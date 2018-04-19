import Vue from 'vue'
import VueAsyncData from 'vue-async-data-2'

const Waterwheel = require('waterwheel')

class waterwheelProvider {
  constructor() {
    this.waterwheel = new Waterwheel({
      base: 'http://local.decoupledkit.com',
      oauth: {
        grant_type: 'password',
        client_id: 'be2557eb-bd73-4606-9a45-30b94a07019d',
        client_secret: 'apitest',
        username: 'apitest',
        password: 'apitest'
      }
    })
  }

  install = (Vue) => {
    // const waterwheel = this.waterwheel;
    Vue.mixin({
      asyncData: {
        nodes (resolve) {
          return fetch('http://local.decoupledkit.com/jsonapi/node/dogs')
            .then(res => res.json())
            .then(data => resolve({waterwheel: {nodes: data.data }}))
            .catch(err => console.error(err))
        }
      }
    })
  }

  getNodes() {
    return 'this is the nodes'
  }

}

export const WaterwheelProvider = new waterwheelProvider()

// auto-install waterwheel + dependencies.
Vue.use(VueAsyncData)
Vue.use(WaterwheelProvider)