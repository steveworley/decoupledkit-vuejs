import Vue from 'vue'

const Waterwheel = require('waterwheel')

class waterwheelProvider {
  constructor() {
    // Less than ideal because these are stored clientside.
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

  provide(key = '$waterwheelProvider') {
    return { '$waterwheelProvider': this }
  }

  install = (Vue) => {

    Vue.prototype.$waterwheel = this.waterwheel;
    Vue.prototype.$waterwheelErrors = [];

    Vue.mixin({
      data() { 
        return this.$options.waterwheel ? {
          '$waterwheelData': {}
        } : {};
      },

      created: function() {
        if (this.$options.waterwheel) {
          for (let key in this.$options.waterwheel) {
            let path = this.$options.waterwheel[key]
            this.$waterwheel.jsonapi.get(path, {}, null)
              .then(res => Vue.set(this, key, res.data))
              .catch(err => console.error(err))
          }
        }
      }
    })
  }
}

export const WaterwheelProvider = new waterwheelProvider()

// auto-install waterwheel + dependencies.
Vue.use(WaterwheelProvider)