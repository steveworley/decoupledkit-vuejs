<template>
  <div>
    <h4>Welcome to the VueJS Decoupled Kit</h4>
    <p>The Decoupled Kit was built to explore and communicate common workflows when building headless applications with Drupals API.
    This application is intended for multiple reasons, but
    primarily as an exercise to help developers understand best practices when combining popular architectural pieces with <a href="https://dri.es/how-to-decouple-drupal-in-2018" target="_blank" rel="noopener noreferrer">Decoupled Drupal</a>, <a href="http://graphql.org" rel="noopener noreferrer" target="_blank">GraphQL</a>,
    and <a href="https://vuejs.org/" rel="noopener noreferrer" target="_blank">VueJS</a>.
    We have also included a <a href="https://github.com/acquia-pso/decoupledkit-drupal" rel="noopener noreferrer" target="_blank">sibling repository</a> to provide all the necessary data schemas, which are used by this React application and the GraphQL server located in sub-folder __graphql_server.
    </p>

    <p>
      <strong>How is this application organized?</strong><br />
      We have broken out each page as individual routes that render components relating to certain developer stories, and each page attempts to address a separate scenario with a general theme.
      This theme is then namespaced in the naming of the files for easier reference. We have also added code references to provide explanation within context of this application or external sources.
      </p>

    <p>
      <strong>Drupal CRUD</strong><br />
      This page addresses workflows when dealing directly with JSON API endpoints served from a <a href="https://github.com/acquia/headless-lightning" rel="noopener noreferrer" target="_blank">Headless Lightning</a> Drupal instance.
      These tasks are broken out by core CRUD (Create, Read, Update, Delete) tasks for rich text and images fields.
        This application does not propose to replace Drupal strengths around content authoring, but rather seeks to understand workflows around interacting with API content.</p>


    <p><strong>GraphQL Client (Single)</strong><br />
      This page addresses architecture scenarios when interacting with a GraphQL server which is exposing content that originates from Drupals JSON API (single source).
      These components interacts with data that is served via GraphQL queries to retrieve and compare data sets.
        This page also helps to compare benefits of using GraphQL as a middle orchestration layer, opposed to dealing directly with standard JSON API structures.
      </p>


    <p><strong>GraphQL Client (Multiple)</strong><br />
      This page builds upon the previous example by synthesizing non-Drupal and Drupal API data with GraphQL by combining multiple sources.
      GraphQL serves the combination of data points into proper structures for retrieval of data, as well as GraphQL <a href="http://graphql.org/learn/queries/#mutations" rel="noopener noreferrer" target="_blank"> mutations</a>.
        This component also addresses scenarios around caching and performance by using the <a href="https://www.apollographql.com/engine/" rel="noopener noreferrer" target="_blank"> Apollo Client</a> layer.
      </p>


    <p><strong>API Data Failover</strong><br />
      Architectures which lean on external sources as the primary data streams can offer challenges. This page demonstrates methods to tackle these scenarios with API failure with techniques of
      browser cache, local indexed databases, and local storage.
      </p>

    <p><strong>API Data Mock</strong><br />
      This component illustrates utilizing techniques to mock API data endpoints when developing locally.
      Mock data endpoints are typically included within local build scripts to help emulate data models, while addressing issues around
      rate limits, changing real data, and similar challenges.
      </p>

    <p>
      Thank you for downloading the Acquia Decoupled Kit and please submit any requests or questions in our <a href="https://github.com/acquia-pso/decoupledkit-react" rel="noopener noreferrer" target="_blank">Github repository</a>.
    </p> 
  </div>
</template>


<script>
export default {
  
}
</script>


<style>

</style>
