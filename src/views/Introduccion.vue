<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/introduccion/img_1.png", class="img-fluid")
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-3 Los alimentos procesados hacen parte fundamental de la dieta actual y su calidad depende, en gran medida, de los procesos y sustancias empleadas durante su elaboración. Entre estos elementos se encuentran los aditivos alimentarios, compuestos que cumplen funciones tecnológicas específicas y que inciden directamente en la estabilidad, apariencia, sabor e inocuidad de los productos.

    .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-5.overflow-hidden
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-9.p-4
          p.mb-0 Comprender el origen, la clasificación, la función y la regulación de los aditivos permite interpretar de manera adecuada los análisis físicoquímicos aplicados a los alimentos y tomar decisiones informadas dentro de los procesos de control de calidad. Este componente desarrolla los conceptos esenciales y su aplicación práctica, promoviendo el uso responsable y normado de los aditivos en coherencia con las exigencias del sector alimentario. 
        .col-5.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/introduccion/img_3.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
