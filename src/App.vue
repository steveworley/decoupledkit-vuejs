<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">DecoupledKit</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link" activeClass="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'crud' }" class="nav-link" activeClass="active">Drupal CRUD</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'gqls' }" class="nav-link" activeClass="active">GraphQL Single</router-link>            
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'gqlm' }" class="nav-link" activeClass="active">GraphQL Multi</router-link>
          </li>
          <li class="nav-item">          
            <router-link :to="{ name: 'mock' }" class="nav-link" activeClass="active">User</router-link>  
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'chat' }" class="nav-link" activeClass="active">Chatbot</router-link>            
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
.row.content {
  padding-top: 2em;
}
</style>
