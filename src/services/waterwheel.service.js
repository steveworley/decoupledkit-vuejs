const Waterwheel = require('waterwheel')

const requiredKeys = (o, required) => {
  const keys = Object.keys(o)
  for (let key of required) {
    if (keys.indexOf(key) === -1) {
      throw new Error(`Incorrect config: Expected ${key} but was not found in configuration.`)
    }
  }
}

class waterwheelProvider {
  constructor(config) {
    requiredKeys(config, ['uri', 'client_id', 'client_secret', 'username', 'password']);

    /* @TODO: Add waterhwheel support for client credentials grant */
    this.waterwheel = new Waterwheel({
      base: config.uri,
      oauth: {
        grant_type: 'password',
        client_id: config.client_id,
        client_secret: config.client_secret,
        username: config.username,
        password: config.password
      }
    })
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
      
      /**
       * Fetch Drupal data when the component is created.
       * 
       * Allows a component to define a `waterwheel` custom property
       * that will automatically trigger a fetch request to the Drupal
       * API to populate the component with data.
       */
      created: function() {
        this.refresh()
      },


      /**
       * Helper methods into Waterwheel.
       * 
       * @TODO: Validate if this is worthwhile or just document that 
       * $waterwheel is available in all methods on components.
       */

      methods: {

        create: function(path, data) {
          return this.$waterwheel.post(path, data)
            .catch(err => this.$waterwheelErrors.push(err))
        },

        // eslint-disable-next-line no-unused-vars
        update: function(path, data, uuid) {
          throw new Error('Unavailable request: Waterwheel does not support updating content at this time.')
        },

        delete: function(path, uuid) {
          return this.$waterwheel.delete(path, uuid)
            .catch(err => this.$waterwheelErrors.push(err))
        },

        refresh: function() {
          if (!this.$options.waterwheel) {
            // If we have no configured waterhweel properties.
            return;
          }
  
          for (let key in this.$options.waterwheel) {
            let prop = this.$options.waterwheel[key]
  
            if (typeof prop !== 'string') {
              requiredKeys(prop, ['resource']);
            }
  
            let path = typeof prop === 'string' ? prop : prop.resource
            let uuid = typeof prop === 'string' ? null : prop.uuid ? prop.uuid : null
            let filter = typeof prop === 'string' ? {} : prop.filter ? prop.filter : {}
  
            this.$waterwheel.jsonapi.get(path, filter, uuid)
              .then(res => Vue.set(this, key, res.data))
              .catch(err => this.$waterwheelErrors.push(err))
          }
        }

      }

    })
  }
}

export default waterwheelProvider