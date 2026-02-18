<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Nomenclatura y etiquetado
    
    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_4_1.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 4.1 Estandarización y codificación internacional de aditivos alimentarios
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12  
          #t_4_2.titulo-segundo.color-primario
            .h2(data-aos="fade-right") 4.2 Estándares para etiquetar aditivos
          .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12 
        #t_4_3.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 4.3 Normatividad de los aditivos
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12 
        #t_4_4.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 4.4 Evaluación de seguridad y toxicidad en aditivos
        .mb-0

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12 
        #t_4_5.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 4.5 Seguridad e higiene en la gestión de aditivos alimentarios
        .mb-0


</template>

<script>
export default {
  name: 'Tema4',
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
