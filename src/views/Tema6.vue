<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Manejo y conversión de unidades de medida
    
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

      #t_6_1.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 6.1 Principales unidades de medida y sus equivalencias
      .mb-0
      
      .tarjeta.color-secundario-5.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-1.d-lg-block.d-none.p-4
            figure
              img(src='@/assets/curso/temas/tema_6/img_4.png', class="img_fluid")
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 A continuación, se presenta una tabla técnica de equivalencia diseñada para facilitar la transición entre unidades de masa, volumen y concentración, fundamentales en los protocolos de formulación y análisis físicoquímicos de aditivos en la industria alimentaria. 


    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 11.
      |  Equivalencias y unidades de medida en aditivos
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. SENA, 2025.
        thead
          tr
            th.col-auto.col-lg-2 Magnitud
            th.col-auto.col-lg-2 Unidad Base
            th.col-auto.col-lg-3 Equivalencia Técnica
            th.col-auto.col-lg-auto Aplicación en la Industria
        tbody
          tr
            td.text-start Masa (Sólidos).
            td.text-start 1 Kilogramo (kg).
            td.text-start 1,000 gramos (g).
            td.text-start Pesaje de materias primas a granel.
          tr
            td.text-start Masa (Aditivos).
            td.text-start 1 Gramo (g).
            td.text-start 1,000 miligramos (mg).
            td.text-start Dosificación de conservantes y antioxidantes.
          tr
            td.text-start Masa (Trazas).
            td.text-start 1 Miligramo (mg).
            td.text-start 1,000 microgramos (g)
            td.text-start Análisis de contaminantes o vitaminas.
          tr
            td.text-start Volumen.
            td.text-start 1 Litro (L).
            td.text-start 1,000 mililitros (ml) o 1 dm3
            td.text-start Preparación de soluciones de aditivos líquidos.
          tr
            td.text-start Volumen (Mínimo).
            td.text-start 1 Mililitro (ml).
            td.text-start 1 centímetro cúbico (cm3 o cc)
            td.text-start Dosificación de esencias y colorantes líquidos.
          tr
            td.text-start Concentración.
            td.text-start 1 % (p/p o p/v)
            td.text-start 1 g de aditivo por cada 100 g o ml
            td.text-start Expresión común en reglamentos técnicos.
          tr
            td.text-start Partes por Millón.
            td.text-start 1 ppm
            td.text-start 1 mg / kg o 1 mg / L
            td.text-start Unidad estándar para límites de la IDA y residuos.
    
    .bg_img_21.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-9(data-aos="zoom-in-right")
          p.mb-3 Para evitar confusiones en el laboratorio o en la línea de producción, es vital recordar que la mayoría de los límites máximos permitidos en Colombia (bajo la Resolución 2606 de 2009) se expresan en mg/kg, lo que equivale exactamente a partes por millón (ppm).
          ul.list-unstyled.mb-1
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
              span <B>De Porcentaje (%) a ppm:</B> Multiplique por 10,000 (Ej: 0.1% = 1,000 ppm).
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
              span <B>De Gramos a Miligramos:</B> Multiplique por 1,000 (Ej: 0.5 g = 500 mg).
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
              span <B>De Miligramos a Kilogramos:</B> Divida por 1,000,000 para obtener la fracción de masa en kg.
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_12.png", class="img-fluid")

      .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-4.overflow-hidden(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-lg-9.p-4
            p.mb-0 <B>Nota:</B> en el análisis físico-químico, un error de un decimal en la conversión (por ejemplo, confundir microgramos con miligramos) puede significar una sobredosificación de 1,000 veces el límite permitido, resultando en un producto no apto para el consumo humano.
          .col-12.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
            figure.p-0.m-0.h-100
              img(src='@/assets/curso/temas/tema_4/img_4.png' class="img-fluid w-100 h-100 object-fit-cover").p-0


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
