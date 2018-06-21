<template>
  <div class="col-md-12">
    <h4>Drupal CRUD Components</h4>
    <p><b>Story</b>: As a developer, I want to understand commod CRUD operations when interacting with Drupal's JSONAPI endpoints.</p>

    <div class="create-node">
      <form @submit="handleCreate">
        <div class="md-form">
          <input type="text" v-model="node.title" id="title" class="form-control" />
          <label for="title">Title</label>              
        </div>
        <div class="md-form">
          <textarea id="body" v-model="node.body" class="form-control"></textarea>
          <label for="body">Body</label>              
        </div>
        <div class="md-form">
          <textarea id="history" v-model="node.history_and_background" class="form-control"></textarea>
          <label for="history">History and background</label>              
        </div>
        <div class="md-form">
          <button class="btn btn-primary">Create</button>
        </div>
      </form>
    </div>

    <div class="node-rows">
      <div v-for="dog in dogs" :key="dog.id" class="card">
        <div class="card-body">
          <h4 class="card-title">{{ dog.title }}</h4>
          <div class="carrd-text">
            <span class="badge source-drupal">Drupal API</span>
            <div class="nid">
              <div class="label">NID</div>
              {{ dog.nid }}
            </div>
            <div class="body">
              <div class="label">Body</div>
              <template v-html="dog.body.value"></template>
            </div>
            <div class="history-and-background">
              <div class="label">History and background</div>
              {{ dog.history_and_background.value }}
            </div>
            <div v-if="dog.image" class="row image">
              <div class="label">NID</div>
              <img :src="dog.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrupalCrud',
  waterwheel: {
    dogs: 'node/dogs'
  },
  data() {
    return {
      dogs: [],
      status: null,
      node: {
        title: null,
        body: null,
        image: null,
        history_and_background: null,
      },
    }
  },
  methods: {
    handleDelete: function(uuid) {
      this.delete('node/dogs', uuid).then(() => {
        this.status = `Successfully deleted ${uuid}`
      })
    },
    handleCreate: function() {
      this.create('node/dogs', this.node).then(() => {
        this.status = `Successfully created ${this.node.title}`
        this.node = { title: null, body: null, image: null, history_and_background: null }
        this.refresh()
      })
    }
  }
}
</script>

<style scoped>
</style>