<template>
  <div class="card" style="width: 18rem;">
    <img :src="creatorImage" class="card-img-top" alt="Foto do criador do site">
    <div class="card-body">
      <h5 class="card-title">Criador do Site</h5>
      <p class="card-text">Olá, meu nome é Gustavo Fava.</p>
      <p class="card-text">Sou criador da empresa "Fava Desenvolvimento", tenho 23 anos.</p>
      <p class="card-text">Faço o seu sistema ou aplicativos e sites, tiramos sua ideia do papel para tela.</p>
    </div>
  </div>
</template>

<script>export default {
  data() {
    return {
      creatorImage: '/src/assets/eu.jpeg'
    }
  }
};
</script>