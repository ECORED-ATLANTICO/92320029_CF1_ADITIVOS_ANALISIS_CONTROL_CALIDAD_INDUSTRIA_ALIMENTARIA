<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Usos y Aplicaciones en la Industria Alimentaria
    
    .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
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
        .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="flip-left")
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

      p.mb-5 A continuación, se presenta una tabla con los colorantes más utilizados en la industria alimentaria y sus principales características:

      .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
        h5 Tabla 2.
        |  Clasificación funcional de los aditivos alimentarios
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado de los reglamentos de la Comisión Europea (UE) 2024 y actualizaciones de la FDA (2025).
        thead
          tr
            th.col-auto.col-lg-2 Código
            th.col-auto.col-lg-2 Aditivo
            th.col-auto.col-lg-3 Origen / Obtención
            th.col-auto.col-lg-2 Riesgo toxicológico
            th.col-auto.col-lg-5 Aplicaciones y perfil técnico
        tbody
          tr
            td E-100.
            td Curcumina.
            td.text-start Polifenol extraído de Curcuma longa.
            td Nulo/Baja.
            td.text-start Pigmento liposoluble de tono amarillo-oro. En 2025 se prefiere su uso en nanoemulsiones para mejorar la estabilidad en bebidas y lácteos funcionales.
          tr
            td E-101.
            td Riboflavina.
            td.text-start Biosíntesis bacteriana (Bacillus subtilis).
            td Nulo (Vitamina).
            td.text-start Vitamina B2 de tono amarillo intenso. Se utiliza como marcador nutricional en cereales y harinas, además de colorante en postres instantáneos.
          tr
            td E-102.
            td Tartrazina.
            td.text-start Síntesis orgánica (Azoico).
            td Crítico.
            td.text-start Altamente estable al pH y calor. Bajo vigilancia estricta por su relación con el TDAH. Su uso está disminuyendo en favor de mezclas de cúrcuma y luteína.
          tr
            td E-104.
            td Amarillo de Quinoleína.
            td.text-start Derivado de la síntesis de alquitrán.
            td Crítico.
            td.text-start Pigmento amarillo-verdoso. Prohibido en países como EE. UU. y Noruega por sospechas de mutagenicidad; en la UE, su dosis diaria admisible (IDA) ha sido reducida.
          tr
            td E-110.
            td Amarillo Ocaso FCF.
            td.text-start Síntesis química (Azoico).
            td Alto.
            td.text-start Proporciona tonos naranja vibrantes. Se asocia con reacciones alérgicas en consumidores sensibles a la aspirina. Muy usado en snacks extruidos.
          tr
            td E-120.
            td Ácido carmínico.
            td.text-start Extracto de Dactylopius coccus.
            td Moderado.
            td.text-start Transición: Aunque es natural, su uso decrece en 2025 debido a la demanda de productos veganos. Se está sustituyendo por extracto de zanahoria negra y remolacha.
          tr
            td E-122.
            td Azorrubina.
            td.text-start Derivado naftalénico (Sintético).
            td Alto.
            td.text-start Color rojo-frambuesa. Obligatoriedad de etiquetado precautorio en la UE sobre efectos en la atención infantil. Común en confitería de bajo costo.
          tr
            td E-124.
            td Ponceau 4R.
            td.text-start Síntesis orgánica (Azoico).
            td Alto.
            td.text-start Rojo intenso. Considerado carcinógeno potencial en dosis elevadas por algunos organismos. Reemplazado progresivamente por el E-129.
          tr
            td E-129.
            td Rojo Allura AC.
            td.text-start Derivado de hidrocarburos.
            td Moderado/Alto.
            td.text-start Es el colorante rojo más resistente a la luz y al oxígeno. Dominante en la industria de bebidas y cereales, pese a la presión por alternativas naturales.
          tr
            td E-131.
            td Azul Patente V.
            td.text-start Trifenilmetano (Sintético).
            td Moderado.
            td.text-start Tono azul violáceo. Posee una baja absorción intestinal, pero su uso está restringido en varios mercados internacionales por riesgo de anafilaxia.
          tr
            td E-140.
            td Clorofilas.
            td.text-start Extracción vegetal (Alfalfa/Espinaca).
            td Nulo.
            td.text-start Inestables al calor y la luz a menos que se presenten como Clorofilinas de Cobre (E-141). Esencial en la tendencia Clean Label.
          tr
            td E-150 (a-d).
            td Caramelo.
            td.text-start Termólisis de carbohidratos.
            td Medio.
            td.text-start Las clases III y IV (E-150c/d) contienen 4-MEI, compuesto bajo vigilancia por la OMS. Indispensable en refrescos de cola y panificación.
          tr
            td E-160a.
            td Betacaroteno.
            td.text-start Extracto de algas (Dunaliella) o síntesis.
            td Nulo.
            td.text-start Precursor de Vitamina A. Los desarrollos de 2024 permiten carotenos microencapsulados que no aportan sabor a zanahoria en los jugos.
          tr
            td E-170.
            td Carbonato de Calcio.
            td.text-start Mineral (Roca caliza).
            td Baja.
            td.text-start Agente de carga y color blanco. Ha ganado relevancia tras la prohibición del Dióxido de Titanio (E-171) en la UE en 2022.

    Separador

    .bg_img_7.mb-3  

      #t_3_2.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 3.2 Conservantes
      .mb-0

      .row.d-flex.align-items-stretch.justify-content-center.mb-0 
        .col-12.col-md-6.col-lg-3.col-xl-4.d-flex.mb-3.mb-xl-0.mb-3(data-aos="flip-left")
          .w-100.d-flex.flex-column
            .tarjeta--blanca-2.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-6.col-lg-4.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_3/img_9.svg", class="img-fluid")
                .col-12.col-lg-12
                  p.mb-0 Los conservantes son sustancias bioactivas esenciales para mitigar el deterioro microbiológico y químico de los alimentos, prolongando su vida útil y preservando sus propiedades nutricionales. Entre ellos destacan los sulfitos, agentes antimicrobianos fundamentales para estabilizar vinos, preservar frutas deshidratadas y mantener la inocuidad en vegetales.
        .col-12.col-md-6.col-lg-3.col-xl-4.d-flex.mb-3.mb-xl-0.mb-3(data-aos="flip-left")
          .w-100.d-flex.flex-column
            .tarjeta--blanca-2.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-6.col-lg-4.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_3/img_10.svg", class="img-fluid")
                .col-12.col-lg-12
                  p.mb-0 A pesar de la actual tendencia hacia productos de "etiqueta limpia" (Clean Label) y el uso de tecnologías físicas como el envasado al vacío o la cadena de frío, estos métodos no siempre son factibles debido a la termolabilidad de ciertos nutrientes o limitaciones logísticas. En consecuencia, el uso de conservantes químicos sigue siendo la estrategia más viable y segura para garantizar la seguridad alimentaria global.
        .col-12.col-md-6.col-lg-3.col-xl-4.d-flex.mb-3.mb-xl-0.mb-3(data-aos="flip-left")
          figure
            img(src="@/assets/curso/temas/tema_3/img_11.png", class="img-fluid")

      p.mb-5(data-aos="zoom-in-right") Bajo este contexto, se exponen a continuación los conservantes de mayor relevancia en la industria contemporánea y sus propiedades intrínsecas:

      .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
        h5 Tabla 3.
        |  Conservantes predominantes en la industria alimentaria
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado de la actualización de regulaciones de la FDA (2025).
        thead
          tr
            th.col-auto.col-lg-2 Código
            th.col-auto.col-lg-2 Aditivo
            th.col-auto.col-lg-3 Origen / Obtención
            th.col-auto.col-lg-2 Clasificación de toxicidad
            th.col-auto.col-lg-5 Características y aplicaciones técnicas
        tbody
          tr
            td E-200 - E-203.
            td Sorbatos (Ácido sórbico).
            td.text-start Síntesis química o natural (bayas).
            td Baja.
            td.text-start Agentes antifúngicos por excelencia. Inhiben levaduras y mohos en productos de panificación, derivados lácteos y bebidas carbonatadas.
          tr
            td E-210 - E-213.
            td Benzoatos (Ácido benzoico).
            td.text-start Síntesis (derivado del benceno).
            td Moderada.
            td.text-start Eficaces en medios ácidos (pH < 4.5). Muy utilizados en refrescos y salsas. Se vigila su combinación con Vitamina C por riesgo de formación de benceno.
          tr
            td E-220 - E-228.
            td Sulfitos y derivados.
            td.text-start Combustión de azufre o síntesis.
            td Moderada / Alérgeno.
            td.text-start Acción bacteriostática y antioxidante. Críticos en la industria vinícola y de frutos secos. Requieren declaración obligatoria por riesgo de hipersensibilidad.
          tr
            td E-234.
            td Nisina.
            td.text-start Biosíntesis (Lactococcus lactis).
            td Nula (Natural).
            td.text-start Bacteriocina de origen natural. Altamente efectiva contra bacterias Gram-positivas y esporas. Pilar de la tendencia Clean Label en quesos y conservas cárnicas. 
          tr
            td E-249 - E-252.
            td Nitritos y nitratos.
            td.text-start Síntesis mineral.
            td Alta.
            td.text-start Esenciales para prevenir Clostridium botulinum en embutidos. Bajo estricto control debido a la potencial formación de nitrosaminas (compuestos precancerígenos).
    
    .tarjeta.color-secundario-5.p-3.rounded-0.mb-0(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.d-lg-block.d-none.p-4
          figure
            img(src='@/assets/curso/temas/tema_3/img_12.png', class="img-fluid")
        .col-12.col-lg-11.mb-0
          p.mb-0 La industria está migrando de los conservantes sintéticos tradicionales hacia sistemas de conservación biológica (como la mencionada Nisina o extractos de romero y té verde enriquecidos). Esta evolución responde no solo a la seguridad toxicofarmacológica, sino a la demanda de los consumidores por ingredientes que no alteren las propiedades organolépticas de los alimentos.

    Separador

    #t_3_3.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 3.3 Antioxidantes
    .mb-0

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_3/img_13.png', class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-3 La oxidación de alimentos, impulsada por el contacto con el oxígeno y la activación de la enzima polifenol oxidasa, provoca cambios físicos, pérdida de nutrientes (vitaminas A y C) y el deterioro de grasas, afectando negativamente el sabor, el olor y la aceptación del consumidor.
        .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-4.overflow-hidden(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0.h-100
            .col-12.col-lg-9.p-4
              p.mb-0 Para mitigar esto, la industria emplea antioxidantes que inhiben la oxidación de lípidos y pigmentos, preservando el valor nutricional y las cualidades organolépticas en aceites, productos cárnicos y panificación. Actualmente, se han desarrollado diversas técnicas adicionales para reducir este proceso y prolongar la vida útil de los productos.
            .col-12.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
              figure.p-0.m-0.h-100
                img(src="@/assets/curso/temas/tema_3/img_14.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-right")
      .col-12.col-lg-10.mb-5
        .div.tarjeta--bg-img.color-primario-20.rounded-3.p-0.mb-5.overflow-hidden
          .row.justify-content-around.align-items-center.mb-0.h-100
            .col-12.col-lg-2.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
              figure.p-0.m-0.h-100
                img(src="@/assets/curso/temas/tema_1/img_6.svg" class="img-fluid w-100 h-100 object-fit-cover").p-0
            .col-12.col-lg-10.p-4.pe-5
              .row.justify-content-between.align-items-center
                .col.mb-5.mb-sm-0
                  h4.mb-1 Ingrese a este enlace y aprenda cómo evitar la oxidación de algunas frutas y verduras:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=rNPatL09fDA" target="_blank")
                    span Enlace
                    i.fas.fa-link.me-2
      
      p.mb-5 A continuación se describen algunas de las más utilizadas bajo una perspectiva de control de calidad y aseguramiento de la inocuidad:

    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 4.
      |  Técnicas de mitigación de la oxidación
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado de Badui Dergal, S. (2025). Química de los Alimentos (7.ª ed.). Pearson Educación.
        thead
          tr
            th.col-auto.col-lg-3 Técnicas
            th.col-auto.col-lg-auto Descripción
        tbody
          tr
            td.text-start Eliminación de oxígeno.
            td.text-start Consiste en la desaireación o purga del espacio de cabeza en envases, reduciendo la presión parcial de oxígeno para prevenir la formación de radicales libres primarios en lípidos y pigmentos.
          tr
            td.text-start Uso de grasas vegetales en lugar de las animales.
            td.text-start Se basa en la sustitución de ácidos grasos saturados y colesterol por aceites con mayor contenido de tocoferoles naturales y perfiles de insaturación controlados, que presentan una cinética de oxidación distinta bajo condiciones específicas.
          tr
            td.text-start Disminución de la oxidación en cadena de las grasas.
            td.text-start Implica el control de la incorporación de aire durante procesos de emulsificación o mezclado, evitando la oclusión de microburbujas de oxígeno que aceleran la rancidez oxidativa.
          tr
            td.text-start Evitar la exposición a luz directa.
            td.text-start Se implementa mediante el uso de envases con barreras actínicas (opacos o con filtros UV) para impedir la fotoxidación catalizada por la riboflavina o la clorofila, que actúan como fotosensibilizadores.
          tr
            td.text-start Eliminación de trazas de metales como hierro y cobre.
            td.text-start Utiliza agentes quelantes o procesos de refinación para secuestrar iones metálicos de transición que actúan como catalizadores en la reacción de Fenton, reduciendo la energía de activación de la oxidación.
          tr
            td.text-start Procesos de escaldado.
            td.text-start Tratamiento térmico breve diseñado para la inactivación de enzimas endógenas, principalmente la lipoxigenasa y la polifenoloxidasa, que catalizan el pardeamiento y la degradación lipídica en vegetales.
          tr
            td.text-start Uso de atmósferas modificadas.
            td.text-start Técnica de envasado que sustituye el aire atmosférico por mezclas gaseosas controladas (generalmente N2 y CO2) para desplazar el oxígeno y retardar el metabolismo respiratorio y oxidativo.
          tr
            td.text-start Empacado al vacío.
            td.text-start Proceso de extracción mecánica del aire del interior del empaque, reduciendo drásticamente la disponibilidad de oxígeno ambiental y limitando la proliferación de microorganismos aeróbios.
          tr
            td.text-start Control de condiciones ambientales.
            td.text-start Supervisión rigurosa de la temperatura y la actividad de agua en el almacenamiento, dado que el incremento térmico acelera la constante de velocidad de las reacciones químicas según la ecuación de Arrhenius.
          tr
            td.text-start Eliminación de catalizadores.
            td.text-start Identificación y remoción de agentes promotores de la oxidación, como resto de peroxidasa, clorofilas residuales o impurezas en los aditivos, garantizando la estabilidad del sistema coloidal.

    Separador

    #t_3_4.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 3.4 Edulcorantes
    .mb-0

    .bloque-texto-t.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_3/img_15.png')
      .bloque-texto-t__texto.col-9.mb-0
        p.mb-0 Los edulcorantes son sustancias utilizadas en la industria alimentaria con el propósito de proporcionar sabor dulce a los alimentos y bebidas, generalmente en cantidades menores que el azúcar, debido a su mayor poder endulzante. Además de esta función sensorial, los edulcorantes permiten reducir el contenido de azúcar en las formulaciones, lo que facilita el desarrollo de productos con menor aporte energético. En algunos casos, también actúan como potenciadores del sabor, ayudando a equilibrar perfiles sensoriales complejos en productos procesados.
    
    .bg_img_8.mb-3
      
      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-botones
            h5 Figura 3.
            |    Principales aplicaciones y funciones de los edulcorantes
          figure(data-aos="flip-left")
            img(src='@/assets/curso/temas/tema_3/img_17.svg', class="img-fluid d-none d-lg-block").mb-5
            img(src='@/assets/curso/temas/tema_3/img_18.svg', class="img-fluid d-block d-lg-none").mb-5
            figcaption Nota. Adaptado del Codex Alimentarius de la Organización Mundial de la Salud (OMS, 2025).
      
      .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-4.overflow-hidden(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-lg-9.p-4
            p.mb-0 Según la OMS, los edulcorantes carecen de función nutricional esencial, utilizándose principalmente para reducir el consumo de azúcares libres. Ante la crisis global de enfermedades metabólicas, la industria prioriza edulcorantes de nueva generación que no afecten el índice glucémico y cumplan con estándares de seguridad, solubilidad, estabilidad y rentabilidad.
          .col-12.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
            figure.p-0.m-0.h-100
              img(src="@/assets/curso/temas/tema_3/img_19.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
    
    p.mb-5 A continuación se presentan algunos de los principales edulcorantes y sus características:

    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 5.
      |  Algunos edulcorantes y sus características
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado Organización Mundial de la Salud (OMS, 2025).
        thead
          tr
            th.col-auto.col-lg-2 Código
            th.col-auto.col-lg-2 Aditivo
            th.col-auto.col-lg-3 Origen
            th.col-auto.col-lg-2 Toxicidad
            th.col-auto.col-lg-5 Uso Principal
        tbody
          tr
            td E-950.
            td Acesulfamo K.
            td.text-start Sintético.
            td Media.
            td.text-start Bebidas sin azúcar y postres lácteos.
          tr
            td E-951.
            td Aspartamo.
            td.text-start Sintético.
            td Alta (Escrutinio).
            td.text-start Refrescos de cola (Bajo vigilancia de la OMS).
          tr
            td E-955.
            td Sucralosa.
            td.text-start Sintético.
            td Baja.
            td.text-start Repostería y productos horneados (Estabilidad térmica).
          tr
            td E-960.
            td Glucósidos de Esteviol.
            td.text-start Natural (Estevia).
            td Nula.
            td.text-start Lácteos y bebidas funcionales.
          tr
            td E-967.
            td Xilitol.
            td.text-start Natural (Corteza).
            td Nula.
            td.text-start Chicles y productos de higiene bucal.
    
    .tarjeta.color-secundario-5.p-3.rounded-0.mb-0(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.d-lg-block.d-none
          figure
            img(src='@/assets/curso/temas/tema_3/img_20.png', class="img-fluid")
        .col-12.col-lg-11.mb-0
          p.mb-0 El uso de edulcorantes es cada vez más relevante debido a que representan una alternativa segura para la salud. Esto contrasta con el consumo perjudicial del azúcar común, el cual se asocia a diversas complicaciones como el deterioro dental, aumento de peso, diabetes, hambre descontrolada, hígado graso, cáncer de páncreas e insuficiencia renal, entre otras.

    Separador 

    .bg_img_9.mb-3
      
      #t_3_5.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 3.5 Estabilizantes
      .mb-0 
      
      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-9.order-2.order-lg-1(data-aos='zoom-in-right')
          .tarjeta.color-primario-5.p-3.rounded-0.mb-3
            p.mb-0 Los aditivos estabilizantes son fundamentales para mantener la textura, viscosidad y apariencia de los alimentos bajo diversas condiciones de conservación. Al absorber el agua libre y formar estructuras de gel o puentes estructurales, estas sustancias previenen la separación de emulsiones y mantienen el equilibrio químico frente a variaciones de temperatura, pH y esfuerzo mecánico.
          p.mb-0 Las siguientes son las principales funciones que cumplen los estabilizantes en los alimentos: 
        .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_3/img_22.png', class="img-fluid") 
      
      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-botones
            h5 Figura 4.
            |    Principales funciones de los estabilizantes
          figure(data-aos="flip-left")
            img(src='@/assets/curso/temas/tema_3/img_23.svg', class="img-fluid d-none d-lg-block").mb-5
            img(src='@/assets/curso/temas/tema_3/img_24.svg', class="img-fluid d-block d-lg-none").mb-5
            figcaption Nota. Adaptado Organización Mundial de la Salud (OMS, 2025).
      
      p.mb-5 Los estabilizantes más usados en la industria alimentaria, sus características y usos principales se pueden observar en la siguiente tabla:

    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 6.
      |  Estabilizantes más usados en la industria alimentaria
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado del Codex Alimentarius (2024).
        thead
          tr
            th.col-auto.col-lg-2 Código
            th.col-auto.col-lg-2 Aditivo
            th.col-auto.col-lg-3 Origen
            th.col-auto.col-lg-2 Toxicidad
            th.col-auto.col-lg-5 Uso Principal
        tbody
          tr
            td E-407.
            td Carragenina.
            td.text-start Natural (Algas).
            td Media.
            td.text-start Lácteos y carnes procesadas (Capacidad de gelificación).
          tr
            td E-412.
            td Goma Guar.
            td.text-start Natural (Legumbre).
            td Baja.
            td.text-start Salsas y helados (Control de viscosidad).
          tr
            td E-415.
            td Sucralosa.
            td.text-start Biosíntesis (Xanthomonas).
            td Baja.
            td.text-start Aderezos y productos sin gluten (Estabilidad al corte).
          tr
            td E-440.
            td Pectinas.
            td.text-start Natural (Frutas).
            td Nula.
            td.text-start Mermeladas y rellenos de fruta.
          tr
            td E-466.
            td CMC (Celulosa).
            td.text-start Semisintético.
            td Baja.
            td.text-start Bebidas en polvo y productos de panificación.

    Separador

    .bg_img_10.mb-3
      
      #t_3_6.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 3.6 Reguladores de pH (Acidulantes)
      .mb-0
      
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
          figure
            img(src='@/assets/curso/temas/tema_3/img_26.png', class="img-fluid")
        .col-12.col-lg-9(data-aos="fade-right")
          p.mb-3 Los reguladores de pH son esenciales para controlar la acidez, actuar como agentes de sabor y potenciar la eficacia de los conservantes.
          .tarjeta--bg-img.color-primario-5.rounded-3.p-0.mb-4.overflow-hidden
            .row.justify-content-center.align-items-center.mb-0.h-100
              .col-12.col-lg-9.p-4
                p.mb-0 Para evitar que los acidulantes reduzcan la vida útil del producto, se recomienda añadirlos una vez finalizada la cocción, utilizando una dosis promedio de 10 g por kilogramo (EcuRed, s.f.).
              .col-12.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
                figure.p-0.m-0.h-100
                  img(src="@/assets/curso/temas/tema_3/img_27.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
          p.mb-0 Las principales aplicaciones de los reguladores de pH son las siguientes:
      
      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-botones
            h5 Figura 5.
            |    Principales aplicaciones de los reguladores de pH
          figure(data-aos="flip-left")
            img(src='@/assets/curso/temas/tema_3/img_28.svg', class="img-fluid d-none d-lg-block").mb-5
            img(src='@/assets/curso/temas/tema_3/img_29.svg', class="img-fluid d-block d-lg-none").mb-5
            figcaption Nota. Adaptado del Codex Alimentarius de la Organización Mundial de la Salud (OMS, 2025).
      
      p.mb-5 En la siguiente tabla se muestran algunos de los reguladores de pH más usados en la industria alimentaria, sus características y usos frecuentes:
    
    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 7.
      |  Algunos reguladores de pH y sus características
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado del Codex Alimentarius (2024).
        thead
          tr
            th.col-auto.col-lg-2 Código
            th.col-auto.col-lg-2 Aditivo
            th.col-auto.col-lg-3 Origen
            th.col-auto.col-lg-2 Toxicidad
            th.col-auto.col-lg-5 Uso Principal
        tbody
          tr
            td E-330.
            td Ácido Cítrico.
            td.text-start Fermentación fúngica.
            td Nula.
            td.text-start Bebidas, dulces y conservas vegetales.
          tr
            td E-334.
            td Ácido Tartárico.
            td.text-start Natural (Uva).
            td Baja.
            td.text-start Panificación y efervescentes.
          tr
            td E-338.
            td Ácido Fosfórico.
            td.text-start Sintético.
            td Media.
            td.text-start Bebidas de cola y clarificación de azúcares.
          tr
            td E-270.
            td Ácido Láctico.
            td.text-start Fermentación láctica.
            td Nula.
            td.text-start Encurtidos, lácteos y productos de panadería.
          tr
            td E-296.
            td Ácido Málico.
            td.text-start Natural/Sintético.
            td Nula.
            td.text-start Caramelos con sabor a frutas y néctares.

    Separador

    .bg_img_11.mb-3

      #t_3_7.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 3.7 Potenciadores de sabor
      .mb-0
      
      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-9.order-2.order-lg-1(data-aos='zoom-in-right')
          .tarjeta.color-secundario-5.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none.p-4
                figure
                  img(src='@/assets/curso/temas/tema_3/img_31.png', class="img-fluid")
              .col-12.col-lg-10.mb-0
                p.mb-0 Los potenciadores de sabor, o saborizantes, se utilizan en la industria alimentaria para intensificar la percepción de los sabores básicos (salado, dulce, ácido, amargo y umami) sin aportar un sabor propio intenso. Estos compuestos se mezclan con los alimentos para hacerlos más apetecibles al resaltar gustos específicos detectados en distintas zonas de la lengua: los bordes (ácido), la parte posterior (amargo), la punta (dulce), los laterales (salado) y la parte media (umami).
          p.mb-0 Dentro de los saborizantes más importantes se encuentran los siguientes:
        .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_3/img_32.png', class="img-fluid") 
      
      .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
        h5 Tabla 8.
        |  Algunos potenciadores de sabor y sus características
      .tabla-a.mb-5(data-aos="flip-left")
        table
          caption 
            p Nota. Adaptado Organización Mundial de la Salud (OMS, 2025).
          thead
            tr
              th.col-auto.col-lg-2 Código
              th.col-auto.col-lg-2 Aditivo
              th.col-auto.col-lg-3 Origen
              th.col-auto.col-lg-2 Toxicidad
              th.col-auto.col-lg-5 Uso Principal
          tbody
            tr
              td E-621.
              td Glutamato Monosódico.
              td.text-start Fermentación.
              td Media.
              td.text-start Comida asiática, snacks y sopas instantáneas.
            tr
              td E-627.
              td Guanilato Disódico.
              td.text-start Síntesis/Natural.
              td Baja.
              td.text-start Caldos concentrados y salsas preparadas.
            tr
              td E-631.
              td Inosinato Disódico.
              td.text-start Síntesis/Animal.
              td Baja.
              td.text-start Potenciador sinérgico junto con el E-621.
            tr
              td E-640.
              td Glicina.
              td.text-start Sintético.
              td Baja.
              td.text-start Edulcorante secundario y potenciador de aroma.
            tr
              td Levadura.
              td Extracto de Levadura.
              td.text-start Natural.
              td Nula.
              td.text-start Sustituto limpio del Glutamato.
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-right")
      .col-12.col-lg-10.mb-5
        .div.tarjeta--bg-img.color-primario-20.rounded-3.p-0.mb-5.overflow-hidden
          .row.justify-content-around.align-items-center.mb-0.h-100
            .col-12.col-lg-2.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
              figure.p-0.m-0.h-100
                img(src="@/assets/curso/temas/tema_1/img_6.svg" class="img-fluid w-100 h-100 object-fit-cover").p-0
            .col-12.col-lg-10.p-4.pe-5
              .row.justify-content-between.align-items-center
                .col.mb-5.mb-sm-0
                  h4.mb-1 Acceda a este video y conozca como se descubrió el quinto sabor umami: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=_xIjiydghRc" target="_blank")
                    span Enlace
                    i.fas.fa-link.me-2
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
