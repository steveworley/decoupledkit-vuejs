<template>
  <div>
    <h4>Chatbot integrations</h4>
    <p><strong>Story:</strong> As a developer I want to expose Drupal content to a ChatBot so that the content team can easily manage content.</p>
    <p>The chatbot utilises the GraphQL server to provide information to answer questions; this particular chatbot uses the pokemon information (found on <a href="/graphqlclientsingle">graphql single</a>), so you can ask it about Pokemon statistics.</p>
    <p>Some questions you can ask</p>
    <ul>
      <li>What is venusaur&apos;s speed?</li>
      <li>What is slowbro&apos;s HP?</li>
      <li>Who is stronger venusaur or slowbro?</li>
      <li>Who has higher speed venusaur or mankey?</li>
    </ul>
    <p className="note"><strong>Available Pokemon:</strong> Venusaur, Slowbro, Maneky, Grimer, Clefairy, Exeggutor, Chesnaught, Solosis, Corsola, Electabuzz<br /><strong>Available stats:</strong> HP, Attack, Defense, Special Attack, Special Defense, Speed<br /><strong>Natural English:</strong> faster, stronger, tougher</p>
    <iframe
      height="430"
      border="0"
      src="https://console.dialogflow.com/api-client/demo/embedded/4aff1f9e-5dd4-4f55-89a5-603117b2159a"></iframe>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
iframe {
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px rgba(0,0,0,.3);
}
</style>
