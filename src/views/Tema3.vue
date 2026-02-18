<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Usos y Aplicaciones en la Industria Alimentaria

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_3_1.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 3.1 Colorantes
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12  
          #t_3_2.titulo-segundo.color-primario
            .h2(data-aos="fade-right") 3.2 Conservantes
          .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12 
        #t_3_3.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 3.3 Antioxidantes
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12 
        #t_3_4.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 3.4 Edulcorantes
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12 
        #t_3_5.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 3.5 Estabilizantes
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_3_6.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 3.6 Reguladores de pH (Acidulantes)
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_3_7.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 3.7 Potenciadores de sabor
        .mb-0


</template>

<script>
export default {
  name: 'Tema3',
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
