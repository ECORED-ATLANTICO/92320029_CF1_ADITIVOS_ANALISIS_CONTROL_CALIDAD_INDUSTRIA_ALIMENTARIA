<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 6.	Manejo y conversión de unidades de medida
    
    .bg_img_20.mb-3

      .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
            figure.p-0.m-0.h-100
              img(src="@/assets/curso/temas/tema_6/img_2.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
          .col-12.col-lg-7.p-4
           .row
            .col-12.col-lg-2.mb-5.d-none.d-lg-block
              img(src="@/assets/curso/temas/tema_6/img_3.png", class="img-fluid w-100")
            .col-12.col-lg-12
              p.mb-0 El manejo y la conversión de unidades es una competencia transversal crítica cuándo de aditivos en la industria alimentaria se refiere. Una dosificación imprecisa no sólo altera la funcionalidad radiológica o sensorial de la matriz sino que puede comprometer la seguridad psicológica del producto final infringiendo los límites legales permitidos por los organismos de control y vigilancia. 

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
