<template>
  <div class="buiness-card">
    <div class="contact-info">
      <h2>{{ nome }}</h2>
      <br/>
      <p><h2>{{ ocupation }}</h2></p>
      <div class="social-links">
        <h2> <a :href="'https://api.whatsapp.com/send?phone=' + whatsappNumber" class="whst" ><i class="bi bi-whatsapp"></i>Whatsapp</a></h2>
        <br/> 
        <h2><a :href="'https://www.facebook.com/' + facebookUsername" class="fc"><i class="bi bi-facebook"></i>Facebook</a></h2>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      nome: "Gustavo Marques Fava",
      ocupation: "Desenvolvedor Full-Stack",
      whatsappNumber:"85989134009",
      facebookUsername: "FavaDesenvolvimento "
      };
  }
};
</script>