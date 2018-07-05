<template>
<p>GraphqlSingle works</p>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'GraphqlSingle',
  apollo: {
    pokemons: gql`{
      pokemons {
        id
        nid
        pokemon_id
        title
        back_shiny_sprite
        front_shiny_sprite
        height_pokemon
        weight_pokemon
        hp
        attack
        defense
        special_attack
        special_defense
        speed
        abilities {
          id
          type
          name
          description
        }
        ref_types {
          id
          type
          name
          description
        }
      }
    }`
  }
}
</script>

<style scoped>
</style>