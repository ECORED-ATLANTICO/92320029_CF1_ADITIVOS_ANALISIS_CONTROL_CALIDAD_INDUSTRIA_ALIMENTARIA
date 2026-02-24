<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Nomenclatura y etiquetado

    .bg_img_12.mb-3
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-5.order-2.order-lg-1
          .tarjeta.color-secundario-5.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
            p.mb-0 Con el objetivo de unificar y estandarizar a nivel mundial la nomenclatura de los aditivos, los organismos reguladores como la OMS han creado un sistema internacional con el fin de qué este procedimiento de denominación sea armonizado para este tipo de sustancias. 
          .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-right")
            .col-2.col-lg-1.d-none.d-lg-block.p-1
              figure
                img(src='@/assets/curso/temas/tema_4/img_2.png', class="img-fluid")
            .col-12.col-lg-11.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
              p.mb-3 Por otra parte, el etiquetado de los productos alimenticios cumple una función multidimensional que va más allá de ser un simple requisito legal; es la herramienta principal de comunicación entre el fabricante y el consumidor final.
        .col-12.col-lg-7.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_3.png", class="img-fluid")

      Separador

      #t_4_1.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 4.1 Estandarización y codificación internacional de aditivos alimentarios
      .mb-0

      p.mb-3 El Sistema Internacional de Numeración (SIN), establecido por el <em>Codex Alimentarius</em> y actualizado en 2024, constituye el marco global para la identificación armonizada de aditivos, eliminando barreras idiomáticas mediante una denominación técnica uniforme. Este sistema garantiza que cada sustancia ha sido sometida a rigurosas evaluaciones de riesgo para asegurar su inocuidad, pureza y estabilidad, posicionándose como un pilar fundamental para el etiquetado claro y la vigilancia sanitaria internacional.
    
      .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-4.overflow-hidden(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-lg-9.p-4
            p.mb-0 En contextos alineados con la normativa europea, como el colombiano, se utiliza el código "E" como sello de garantía técnica y seguridad toxicológica validada por la EFSA. Su estructura numérica permite una clasificación sistemática donde el primer dígito define la función tecnológica principal (ej. colorante o conservante), el segundo detalla la familia química y los últimos identifican de forma unívoca la molécula, asegurando consistencia funcional en el procesamiento de alimentos. 
          .col-12.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
            figure.p-0.m-0.h-100
              img(src='@/assets/curso/temas/tema_4/img_4.png' class="img-fluid w-100 h-100 object-fit-cover").p-0

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10 
        .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
          h5 Figura 6.
          span Codificación internacional de aditivos alimentarios.
        figure(data-aos="flip-left")
          img(src='@/assets/curso/temas/tema_4/img_5.svg', class="img-fluid d-none d-lg-block mb-0", alt="En la figura se describen los códigos de clasificación internacionales de aditivos alimentarios.").mb-5
          img(src='@/assets/curso/temas/tema_4/img_6.svg', class="img-fluid d-block d-lg-none mb-0").mb-5
        figcaption(data-aos="zoom-in-right") Nota.  Adaptado <em>Codex Alimentarius.</em> (2024).

    .tarjeta--bg-img.color-secundario-5.rounded-3.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-7.p-4
         .row
          .col-12.col-lg-2.mb-5.d-none.d-lg-block
            img(src="@/assets/curso/temas/tema_4/img_7.svg", class="img-fluid w-100")
          .col-12.col-lg-12
            p.mb-0 Es imperativo que el experto en calidad reconozca que el SIN es un sistema dinámico y de carácter abierto. Debido a la constante innovación biotecnológica y la incorporación de nuevos aditivos, como los conservantes de origen natural o edulcorantes de nueva generación, la secuencia numérica original ha sufrido expansiones. 
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/temas/tema_4/img_8.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
    
    .bg_img_13.mb-3
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-6.col-lg-6
          .tarjeta.color-primario.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-md-12.col-lg-4.col-xl-4.mb-lg-0.mb-3
                figure
                  img(src="@/assets/curso/temas/tema_4/img_10.png", class="img-fluid w-100")
              .col-12.col-md-12.col-lg-8.col-xl-8.mb-lg-0
                h2.text-white.mb-5 Pódcast
                TarjetaAudio.color-acento-botones.mb-0.p-4(
                  texto="Etiquetas bajo la lupa"
                  :audio="require('@/assets/curso/temas/tema_4/img_10.png')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = True")
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

      Separador

      #t_4_2.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 4.2 Estándares para etiquetar aditivos
      .mb-0

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-md-2.order-lg-1
        .tarjeta.color-primario-5.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-1.d-lg-block.d-none
              figure
                img(src='@/assets/curso/temas/tema_4/img_11.svg', class="img_fluid")
            .col-12.col-lg-11.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
              p.mb-3 El etiquetado de alimentos debe reflejar de manera clara y veraz la información relacionada con los aditivos utilizados, garantizando el derecho a la información del consumidor. Su propósito fundamental es garantizar, bajo un enfoque de seguridad y técnica alimentaria su inocuidad, rastre habilidad información nutricional y permitir la toma de decisiones del potencial consumidor. 
        p.mb-0 A continuación se describen los requisitos que debe contener una etiqueta bajo un enfoque de seguridad y técnica alimentaria:  
      .col-12.col-lg-3.order-1.order-md-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_4/img_12.png", class="img-fluid")
    
    .bg_img_14.mb-3

      .row.justify-content-center.mb-5
        .col-xl-3.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img.p-0
              figure.p-0
                img(src="@/assets/curso/temas/tema_4/img_14.png", class="img-fluid").p-0
            .crd_hover_txt--body
              h4.mb-3 Garantía de inocuidad y salud pública.
              p.mb-3 El etiquetado permite identificar la presencia de alérgenos (como sulfitos, gluten, lácteos o frutos secos) que pueden causar reacciones adversas graves en poblaciones sensibles. Asimismo, proporciona instrucciones críticas sobre el modo de empleo y conservación, asegurando que el alimento se mantenga estable y seguro hasta su consumo.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

        .col-xl-3.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_4/img_15.png", class="img-fluid")
            .crd_hover_txt--body
              h4.mb-3 Transparencia y rastreabilidad.
              p.mb-0 A través del Sistema Internacional de Numeración (SIN) y la nomenclatura europea (códigos E), el etiquetado informa con precisión qué aditivos se han utilizado y para qué función tecnológica (colorantes, conservantes, etc.). Esto facilita la trazabilidad en caso de alertas sanitarias, permitiendo identificar lotes específicos.
        
        .col-xl-3.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_4/img_16.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Información nutricional y toma de decisiones.
              p.mb-0 Permite al consumidor conocer el aporte calórico y la composición de macronutrientes (grasas, azúcares, proteínas). En la actualidad, esto es vital para el manejo de enfermedades metabólicas, permitiendo elegir productos con mejores perfiles nutricionales o menores índices glucémicos.
        
        .col-xl-3.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_4/img_17.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Identificación técnica de aditivos.
              p.mb-0 El uso de códigos estandarizados asegura que el consumidor sepa que los aditivos han pasado por controles de calidad y seguridad estrictos por organismos como la EFSA o el Codex Alimentarius. La clasificación por grupos (E-100 para colorantes, E-200 para conservantes, etc.) ayuda a entender la naturaleza del ingrediente sin necesidad de nombres químicos complejos.

      Separador
 
      #t_4_3.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 4.3 Normatividad de los aditivos
      .mb-0

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_4/img_18.png', class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        .tarjeta.color-secundario-5.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
          p.mb-0 La regulación de los aditivos alimentarios es un proceso científico y legal que garantiza que las sustancias añadidas a los alimentos no representen un riesgo para la salud del consumidor bajo las condiciones de uso previstas. Para cumplir este propósito, a nivel nacional e internacional se han creado organismos que cumplen la labor de vigilancia, control y regulación de los aditivos alimentarios. Estas instituciones no solo dictan normas, sino que establecen los límites de seguridad basados en la evidencia toxicológica más reciente.
        p.mb-0 A nivel global, la función de estas entidades se articula en tres pilares técnicos:

    .bg_img_15.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--04
                h6.text-white.text-center.bg-color-primario-20.text-center.fw-bold.p-3 Evaluación de riesgos: 
                .tarjeta--slider__content.text-center realizan estudios toxicológicos para determinar la Ingesta Diaria Admisible (IDA), que es la cantidad de un aditivo que una persona puede consumir diariamente durante toda su vida sin riesgo apreciable para su salud.
              .tarjeta--color-white.h-100
                .tarjeta--05
                h6.text-white.text-center.bg-color-primario-20.text-center.fw-bold.p-3 Armonización normativa: 
                .tarjeta--slider__content.text-center desarrollan estándares internacionales para evitar que las regulaciones nacionales se conviertan en barreras técnicas al comercio, asegurando que un producto sea seguro en cualquier mercado.
              .tarjeta--color-white.h-100
                .tarjeta--06
                h6.text-white.text-center.bg-color-primario-20.text-center.fw-bold.p-3 Vigilancia y actualización: 
                .tarjeta--slider__content.text-center monitorean constantemente los nuevos descubrimientos científicos. Si un aditivo previamente aprobado muestra efectos adversos (como ha ocurrido recientemente con ciertos colorantes azoicos o el dióxido de titanio), estos organismos tienen la potestad de restringir o prohibir su uso.
        .col-12.col-lg-4.order-2.order-lg-1.mb-0.mb-lg-0.mb-3(data-aos="flip-left")
          figure
            img(src='@/assets/curso/temas/tema_4/img_23.png', class="img-fluid")
      
      .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-4.overflow-hidden(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-lg-9.p-4
            p.mb-0 El control de los aditivos se divide en organismos que dictan las normas (estándares) y organismos que ejercen la vigilancia (autoridad administrativa). 
          .col-12.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
            figure.p-0.m-0.h-100
              img(src='@/assets/curso/temas/tema_4/img_24.png' class="img-fluid w-100 h-100 object-fit-cover").p-0
              
    .row.justify-content-center.align-items-start.mb-5
      .col-md-10.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_4/img_25.png', class="img-fluid")
      .col-12.col-lg-9.order-2.order-lg-1.mb-3
        p.mb-3 A nivel internacional los organismos vigentes y más relevantes son los siguientes: 
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="Codex Alimentarius (FAO/OMS)")
            p.mb-0 Es el máximo referente mundial. Su Norma General para los Aditivos Alimentarios (GSFA) es la base de las legislaciones de la mayoría de los países.
          div(titulo="JECFA (Comité Mixto FAO/OMS de Expertos en Aditivos Alimentarios)")
            p.mb-0 Es el cuerpo científico independiente que realiza las evaluaciones de riesgo y establece las especificaciones de identidad y pureza de los aditivos.
          div(titulo="EFSA (Autoridad Europea de Seguridad Alimentaria)")
            p.mb-0 Entidad de la Unión Europea encargada de la reevaluación técnica de los aditivos (donde se originan los códigos "E"). Sus dictámenes son de los más estrictos a nivel mundial.
          div(titulo="FDA (Administración de Alimentos y Medicamentos - EE. UU.)")
            p.mb-0 Regula los aditivos en el mercado estadounidense a través de la lista GRAS (Generally Recognized as Safe) y las listas de aditivos permitidos tras certificación.

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-3(data-aos="zoom-in-right")
        p.mb-3 Por su parte, en Colombia los organismos vigentes y más relevantes son los siguientes:
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="Ministerio de Salud y Protección Social")
            p.mb-0 Es el ente encargado de emitir la política pública y la normativa (Resoluciones) que adopta los estándares internacionales del Codex en el territorio nacional.
          div(titulo="INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos)")
            p.mb-0 Es la autoridad sanitaria de ejecución. Su labor es la vigilancia, inspección y control (IVC) en las plantas de producción, asegurando que las empresas cumplan con las dosis máximas permitidas.
          div(titulo="ICA (Instituto Colombiano Agropecuario)")
            p.mb-0 Aunque su enfoque es primario, regula aditivos en alimentos para animales y sustancias que puedan migrar a la cadena alimentaria humana desde el sector agropecuario.
      .col-md-10.col-lg-3.order-1.order-lg-2.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_4/img_26.png', class="img-fluid")
      
    p.mb-5 Con respecto a la reglamentación y obligatoriedad en el etiquetado de la industria alimentaria, se relaciona en la tabla a continuación los principales elementos, normas vigentes y requisitos técnicos en Colombia:

    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 9.
      |  Conservantes predominantes en la industria alimentaria
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. MINSALUD Colombia, (2025).
        thead
          tr
            th.col-auto.col-lg-2 Elemento
            th.col-auto.col-lg-4 Norma vigente
            th.col-auto.col-lg-auto Requisito técnico
        tbody
          tr
            td.text-start Sellos Frontales.
            td.text-start Resolución 2492 / 2022.
            td.text-start Sellos negros circulares de advertencia.
          tr
            td.text-start Tabla Nutricional.
            td.text-start Resolución 2492 / 2022.
            td.text-start Formato específico por 100g/ml y por porción.
          tr
            td.text-start Alérgenos.
            td.text-start Resolución 5109 / 2005.
            td.text-start Declaración obligatoria de sustancias de hipersensibilidad.
          tr
            td.text-start Aditivos (SIN).
            td.text-start Resolución 2606 / 2009.
            td.text-start Declaración por función técnica y código.
          tr
            td.text-start Sellos Frontales.
            td.text-start Resolución 2492 / 2022.
            td.text-start Sellos negros circulares de advertencia.

    Separador

    #t_4_4.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 4.4 Evaluación de seguridad y toxicidad en aditivos
    .mb-0

    .bloque-texto-t.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_4/img_27.png')
      .bloque-texto-t__texto.col-9.mb-0
        p.mb-0 Tras validar la necesidad tecnológica de un aditivo, su implementación industrial depende de una evaluación de seguridad química vinculante. Este proceso, realizado por expertos, busca mitigar riesgos para la salud pública mediante el análisis de datos toxicológicos y clínicos.

    .bg_img_16.mb-3
    
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
          figure
            img(src='@/assets/curso/temas/tema_4/img_29.png', class="img-fluid")
        .col-12.col-lg-9(data-aos="zoom-in-right")
          .tarjeta.color-primario-5.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
            p.mb-0 El procedimiento identifica el Nivel sin Efecto Adverso Observado (NOAEL) para calcular la Ingesta Diaria Admisible (IDA). Según los estándares de la Unión Europea y el Codex Alimentarius, se aplica un factor de seguridad de 100 veces sobre el NOAEL para cubrir variabilidades biológicas y asegurar que el consumo de por vida no represente riesgos.
          .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-right")
            .col-2.col-lg-1.d-none.d-lg-block.p-4
              figure
                img(src='@/assets/curso/temas/tema_4/img_30.png', class="img-fluid")
            .col-12.col-lg-11.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
              p.mb-3  Finalmente, la Comisión del Codex Alimentarius (FAO/OMS) garantiza la armonización científica de estas normas, facilitando el comercio y la protección del consumidor. En 2025, el enfoque se ha intensificado en la vigilancia de la exposición acumulativa para preservar la integridad sistémica del individuo frente a la dieta total.

      Separador

      #t_4_5.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 4.5 Seguridad e higiene en la gestión de aditivos alimentarios
      .mb-0

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-md-2.order-lg-1(data-aos="zoom-in-right")
        .tarjeta.color-secundario-5.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.d-lg-block.d-none
              figure
                img(src='@/assets/curso/temas/tema_4/img_31.png', class="img_fluid")
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-3 La eficacia de los aditivos para mejorar la durabilidad e higiene de los alimentos depende directamente de su correcta manipulación y almacenamiento. El Codex Alimentarius enfatiza que un aditivo mal gestionado puede pasar de ser un agente de conservación a un foco de contaminación química o física.
        p.mb-0 Es fundamental que todas las personas involucradas en la cadena de transformación sigan protocolos específicos para garantizar la inocuidad del aditivo antes de su incorporación al producto:
      .col-12.col-lg-3.order-1.order-md-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_4/img_32.png", class="img-fluid")
    
    .bg_img_17.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/temas/tema_4/img_34.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--07
                .tarjeta--slider__content.text-center Verificar que el proveedor sea certificado y que garantice el grado de pureza de los insumos (food grade). 
              .tarjeta--color-white.h-100
                .tarjeta--08
                .tarjeta--slider__content.text-center Inspección de los envases garantizando que no presenten roturas, ni signos de humedad ni manipulación previa que comprometan su esterilidad.
              .tarjeta--color-white.h-100
                .tarjeta--09
                .tarjeta--slider__content.text-center Almacenamiento diferenciado en un lugar fresco, seguro y separado estrictamente de otros productos o sustancias tóxicas para evitar la contaminación cruzada.
              .tarjeta--color-white.h-100
                .tarjeta--10
                .tarjeta--slider__content.text-center Control de la humedad de los mismos especialmente de las sales y espesantes que son altamente absorbentes y por ende facilitan el crecimiento de hongos. 
              .tarjeta--color-white.h-100
                .tarjeta--11
                .tarjeta--slider__content.text-center Dosificación controlada al pesar y preparar soluciones, realizando estos procesos con utensilios y personal esterilizado, para evitar ingreso de microorganismos al lote de producción. 
              .tarjeta--color-white.h-100
                .tarjeta--12
                .tarjeta--slider__content.text-center Prevención sobredosificación al calcular y pesar de manera estricta la introducción de aditivos, ya que un error puede exceder la Ingesta Diaria Admisible (IDA) convirtiéndose en un riesgo toxicológico para el consumidor. 
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="flip-left")
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
