<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Origen, tipos y clasificación de los aditivos

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_2_1.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 2.1 Origen y tipos
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12  
          #t_2_2.titulo-segundo.color-primario
            .h2(data-aos="fade-right") 2.2 Clasificación Funcional
          .mb-0

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
