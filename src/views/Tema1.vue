<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de los aditivos alimentarios

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_1_1.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 1.1 Contexto histórico
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12  
          #t_1_2.titulo-segundo.color-primario
            .h2(data-aos="fade-right") 1.2 Objetivos y función
          .mb-0

    


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
