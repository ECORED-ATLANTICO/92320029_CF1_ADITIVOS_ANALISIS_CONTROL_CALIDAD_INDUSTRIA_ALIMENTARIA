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


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-11
                p.cita-decorada__texto.mb-2.p-3 Comprender el origen, la clasificación, la función y la regulación de los aditivos permite interpretar de manera adecuada los análisis físicoquímicos aplicados a los alimentos y tomar decisiones informadas dentro de los procesos de control de calidad. Este componente desarrolla los conceptos esenciales y su aplicación práctica, promoviendo el uso responsable y normado de los aditivos en coherencia con las exigencias del sector alimentario. 
              .col-2.col-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/introduccion/img_3.png', class="cita-decorada__imagen-flotante-3")
    
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
