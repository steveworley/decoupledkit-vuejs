<template>
<div class="component component--graphql-multi">
  <h4>Using GraphQL to query a data from both a Headless Drupal source and external non-Drupal API.</h4>
  <p>
    <b>Story:</b> As a developer, I would like to understand the usefulness of utilizing a GraphQL server combine data from multiple API endpoints. I would like to understand how to setup the proper types and schema definitions to display this data. Using the GraphQL server we can demonstrate accessing information from different systems and exposing the data through a single interface for attached clients (this React application).
  </p>
  <div class="docs-ref clearfix">
    {{ apollo.characters.loc.source.body }}
  </div>

  <div class="form form--create-character">
    <input type="form-control" v-model="characterName" />
  </div>

</div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'GraphqlMulti',
  apollo: {
      characters: gql`
        query {
          characters {
            id
            name
            description
            image
            comics {
              id
              title
              image
              description
              sales {
                issue
                count
              }
            }
          }
        }
      `
    },
    data: () => {
      return {
        characters: [],
        characterName: null,
      }
    }
}
</script>

<style scoped>
</style>