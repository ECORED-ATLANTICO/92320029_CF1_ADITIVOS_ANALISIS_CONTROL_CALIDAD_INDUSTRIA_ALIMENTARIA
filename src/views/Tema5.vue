<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Relación entre aditivos y análisis fisicoquímico 
    
    .bg_img_18.mb-3
      
      .bloque-texto-t.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/temas/tema_5/img_2.png')
        .bloque-texto-t__texto.col-9.mb-0
          p.mb-0 La relación entre los aditivos y el análisis físicoquímico representa el núcleo del control de calidad en la industria alimentaria. Este análisis no solo valida la funcionalidad técnica del aditivo, sino que garantiza el cumplimiento estricto de la normatividad sanitaria vigente.
      
      .tarjeta.color-secundario-5.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-1.d-lg-block.d-none.p-4
            figure
              img(src='@/assets/curso/temas/tema_5/img_3.png', class="img_fluid")
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 Debido a que la incorporación de aditivos en una matriz alimentaria altera sus propiedades intrínsecas, este proceso exige un monitoreo analítico constante para asegurar que la dosis aplicada sea efectiva y segura.  

      Separador

      #t_5_1.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 5.1 Pilares del análisis físicoquímico en aditivos
      .mb-0
        
    .bg_img_19.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
          figure
            img(src='@/assets/curso/temas/tema_5/img_5.png', class="img-fluid")
        .col-12.col-lg-9(data-aos="zoom-in-right")
          p.mb-3 El análisis físicoquímico de aditivos alimentarios es fundamental para validar la integridad, pureza y funcionalidad de los productos. Mediante técnicas de alta precisión como espectrofotometría UV-Vis y reometría, se cuantifican concentraciones y se evalúan parámetros críticos (pH, estabilidad oxidativa y viscosidad) para asegurar el cumplimiento tecnológico y los límites de la Ingesta Diaria Admisible (IDA). 
          .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-4.overflow-hidden
            .row.justify-content-center.align-items-center.mb-0.h-100
              .col-12.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
                figure.p-0.m-0.h-100
                  img(src="@/assets/curso/temas/tema_5/img_6.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
              .col-12.col-lg-9.p-4
                p.mb-0 Este rigor analítico garantiza la conformidad con la Resolución 2606 de 2009 y los estándares del Codex Alimentarius, asegurando la inocuidad alimentaria y la transparencia en el etiquetado. El proceso se fundamenta en los siguientes pilares: 

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10 
          .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
            h5 Figura 7.
            span Pilares del análisis fisicoquímico en el uso de aditivos
          figure(data-aos="zoom-in-right").mb-3
            img(src='@/assets/curso/temas/tema_5/img_7.svg', class="img-fluid d-none d-lg-block mb-0").mb-5
            img(src='@/assets/curso/temas/tema_5/img_8.svg', class="img-fluid d-block d-lg-none mb-0").mb-5
          figcaption(data-aos="zoom-in-right") <b>Fuente:</b> Adaptado de INVIMA (2025).
    
    p.mb-3 A continuación se detalla una tabla que incluye las diferentes técnicas analíticos por grupos de aditivos: 

    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 10.
      |  Técnicas analíticas físicoquímicas por grupos de aditivos
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p <b>Fuente:</b> Adaptado de INVIMA (2025).
        thead
          tr
            th.col-auto.col-lg-2 Grupo de Aditivo
            th.col-auto.col-lg-4 Análisis físicoquímico clave
            th.col-auto.col-lg-auto Instrumentación utilizada
        tbody
          tr
            td.text-start Colorantes.
            td.text-start Espectrofotometría de absorción
            td.text-start Espectrofotómetro UV - Vis.
          tr
            td.text-start Conservantes.
            td.text-start Determinación de concentración
            td.text-start HPLC / GC (Gaseosa).
          tr
            td.text-start Reguladores de pH.
            td.text-start Determinación de acidez titulable y pH.
            td.text-start Potenciómetro.
          tr
            td.text-start Espesantes.
            td.text-start Perfil reológico y viscosidad.
            td.text-start Viscosímetro Brookfield
          tr
            td.text-start Antioxidantes.
            td.text-start Índice de peroxidación lipídica.
            td.text-start Valoración química / Fotometría.
          tr
            td.text-start Edulcorantes.
            td.text-start Cuantificación de concentración y pureza.
            td.text-start HPLC / Polarimetría.
          tr
            td.text-start Estabilizantes.
            td.text-start Viscosidad aparente y estabilidad de fase.
            td.text-start Viscosímetro Brookfield / Centrifugación.
          tr
            td.text-start Potenciadores de sabor.
            td.text-start Determinación de ácido glutámico y sales.
            td.text-start Valoración por potenciometría / HPLC.
</template>

<script>
export default {
  name: 'Tema5',
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
