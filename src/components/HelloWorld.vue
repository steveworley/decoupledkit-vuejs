<template>
  <div class="hello">
    <ul id="test">
      <li v-for="dog in dogs" :key="dog.id">{{ dog.attributes.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  waterwheel: {
    dogs: 'node/dogs'
  },
  data() {
    return {
      dogs: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
