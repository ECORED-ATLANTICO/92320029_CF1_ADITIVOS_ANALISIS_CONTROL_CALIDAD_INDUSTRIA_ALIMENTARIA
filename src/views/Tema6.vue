<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 6.	Manejo y conversión de unidades de medida

    Separador
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_5_1.titulo-segundo.color-primario
          .h2(data-aos="fade-right") 6.1 Principales unidades de medida y sus equivalencias
        .mb-0

</template>

<script>
export default {
  name: 'Tema6',
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
