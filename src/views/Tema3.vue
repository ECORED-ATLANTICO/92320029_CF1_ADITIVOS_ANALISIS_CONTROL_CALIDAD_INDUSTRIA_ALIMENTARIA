<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Usos y Aplicaciones en la Industria Alimentaria
    
    .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-5.overflow-hidden
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/temas/tema_3/img_1.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-4
         .row
          .col-12.col-lg-2.mb-5.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema_3/img_2.png", class="img-fluid w-100")
          .col-12.col-lg-12
            p.mb-0 Los aditivos son fundamentales para mejorar las características sensoriales, prolongar la vida útil y reducir costos en la industria alimentaria. Debido a su impacto, es imperativo mantener rigurosos controles de calidad durante su preparación, envasado y almacenamiento.

    Separador

    .bg_img_6.mb-3 
      
      #t_3_1.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 3.1 Colorantes
      .mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/temas/tema_3/img_4.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--01
                .tarjeta--slider__content.text-center Los alimentos poseen un color característico que, idealmente, debería preservarse durante su procesamiento. Sin embargo, al no ser esto siempre posible, resulta necesario el uso de aditivos para garantizar un color constante, atractivo y sin alteraciones a lo largo de la cadena de producción.
              .tarjeta--color-white.h-100
                .tarjeta--02
                .tarjeta--slider__content.text-center Cabe destacar que los colorantes son el grupo de aditivos que genera mayor controversia, ya que los consumidores suelen percibir que no aportan a la calidad nutricional, conservación o higiene. Por ello, su aceptación está estrechamente ligada a la percepción de niveles de riesgo mínimos.
              .tarjeta--color-white.h-100
                .tarjeta--03
                .tarjeta--slider__content.text-center Estos aditivos adquieren especial relevancia en los productos dirigidos al público infantil, un sector altamente influenciable por el aspecto visual, ya que el color es el primer atributo que perciben los sentidos, este influye subjetivamente en la percepción del sabor y el olor, condicionando el juicio sobre la calidad del alimento (Eroski Consumer, 2008).

      p.mb-0 A continuación, se presenta una tabla con los colorantes más utilizados en la industria alimentaria y sus principales características:

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
