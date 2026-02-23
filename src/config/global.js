export default {
  global: {
    Name: 'Aditivos: usos y aplicaciones en la industria alimentaria.',
    Description:
      'Este componente formativo aborda de manera integrada las generalidades, usos, aplicaciones y control de los aditivos utilizados en la industria alimentaria, destacando su función tecnológica, clasificación, nomenclatura y normatividad vigente. El contenido permite comprender la relación entre el uso de aditivos, la calidad, la inocuidad y el análisis fisicoquímico de los alimentos, fortaleciendo criterios técnicos para su correcta aplicación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de los aditivos alimentarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Contexto histórico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivos y función',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Origen, tipos y clasificación de los aditivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Origen y tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación Funcional',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Usos y Aplicaciones en la Industria Alimentaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Colorantes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Conservantes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Antioxidantes',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Edulcorantes',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Estabilizantes',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Reguladores de pH (Acidulantes)',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Potenciadores de sabor',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Nomenclatura y etiquetado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Estandarización y codificación internacional de aditivos alimentarios',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estándares para etiquetar aditivos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Normatividad de los aditivos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Evaluación de seguridad y toxicidad en aditivos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Seguridad e higiene en la gestión de aditivos alimentarios',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Relación entre aditivos y análisis fisicoquímico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Pilares del análisis físicoquímico en aditivos',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Manejo y conversión de unidades de medida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Principales unidades de medida y sus equivalencias',
            hash: 't_6_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acidulante',
      significado:
        'Sustancias que aumentan la acidez de un alimento o le confieren un sabor ácido.',
    },
    {
      termino: 'Aditivo alimentario',
      significado:
        'Sustancia que se añade intencionalmente a los alimentos con fines tecnológicos para mejorar su conservación, aspecto o sabor.',
    },
    {
      termino: 'Análisis fisicoquímico',
      significado:
        'Estudio de las propiedades físicas y químicas de los alimentos para determinar su calidad y composición.',
    },
    {
      termino: 'Antioxidantes',
      significado:
        'Sustancias que evitan el mal aspecto y sabor provocado por la oxidación de los alimentos.',
    },
    {
      termino: 'Colorantes',
      significado:
        'Aditivos que brindan o intensifican el color de un producto para mejorar su aspecto visual.',
    },
    {
      termino: 'Conservantes',
      significado:
        'Sustancias empleadas para evitar el deterioro de los alimentos causado por microorganismos.',
    },
    {
      termino: 'Curcumina (E-100)',
      significado:
        'Polifenol extraído de la <em>Curcuma longa</em>, utilizado como pigmento amarillo natural.',
    },
    {
      termino: 'Edulcorantes',
      significado:
        'Aditivos que proporcionan sabor dulce sustituyendo el uso de azúcares.',
    },
    {
      termino: 'Estabilizantes',
      significado:
        'Sustancias que permiten mantener o alterar la textura y composición de los alimentos.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Garantía de que un alimento no causará daño al consumidor cuando se prepare o consuma de acuerdo con su uso previsto.',
    },
    {
      termino: 'Organoléptico',
      significado:
        'Propiedades de los alimentos que se perciben a través de los sentidos, como sabor, olor y color.',
    },
    {
      termino: 'Potenciadores de sabor',
      significado:
        'Sustancias que incrementan la percepción del sabor de los alimentos sin tener un sabor propio significativo.',
    },
    {
      termino: 'Reguladores de pH',
      significado:
        'Sustancias que controlan el nivel de acidez o alcalinidad en un producto alimenticio.',
    },
    {
      termino: 'Sintético (Aditivo)',
      significado:
        'Sustancia producida mediante procesos químicos de laboratorio que no se encuentra de forma natural.',
    },
    {
      termino: 'Tartrazina (E-102)',
      significado:
        'Colorante artificial de tono amarillo, bajo vigilancia por su relación con efectos en la atención infantil.',
    },
  ],
  referencias: [
    {
      referencia:
        'Badui Dergal, S. (2025). <em>Química de los Alimentos</em> (7.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Codex Alimentarius. (2024). <em>Norma General para los Aditivos Alimentarios (Codex Stan 192-1995)</em>. Revisión de 2024. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: 'https://www.fao.org/fao-who-codexalimentarius/home/es/',
    },
    {
      referencia:
        'Eroski Consumer. (2008). <em>Guía de aditivos alimentarios: El color en la industria</em>.',
      link: '',
    },
    {
      referencia:
        'European Food Safety Authority (EFSA). (2025). <em>Scientific report on the re-evaluation of high-intensity sweeteners and their impact on the gut microbiota (2024-2026)</em>. <em>EFSA Journal</em>.',
      link: '',
    },
    {
      referencia:
        'FAO. (2025). <em>Codex Alimentarius: General Standard for Food Additives</em>.',
      link:
        'https://www.fao.org/fao-who-codexalimentarius/codex-texts/dbs/gsfa/es/',
    },
    {
      referencia:
        'FAO & OMS. (2015). <em>Garantía de la inocuidad y calidad de los alimentos</em>.',
      link: '',
    },
    {
      referencia:
        'Food and Drug Administration (FDA). (2025). <em>Color Additive Status List: Summary of color additives for use in United States in foods, drugs, cosmetics, and medical devices</em>. U.S. Department of Health and Human Services.',
      link:
        'https://www.fda.gov/food/food-additives-petitions/color-additive-status-list',
    },
    {
      referencia:
        'Ibáñez, F. C., Irigoyen, A., & Torre, P. (2003). <em>Aditivos alimentarios</em>. Universidad Pública de Navarra.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2025). <em>Protocolos de estabilidad y vida útil para alimentos procesados: Control de procesos de oxidación</em>. Ministerio de Salud de Colombia.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2023). <em>Aditivos alimentarios</em>. Notas descriptivas.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2025). <em>Codex Alimentarius: Clasificación funcional de los aditivos</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Érika Alejandra Beltrán Cuesta',
          cargo: 'Evaluadora de calidad instruccional',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Carlos Eduardo Orozco Osorio',
          cargo: 'Desarrollador de contenidos',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Ebert Arcila Jaramillo',
          cargo: 'E-pedagogo instruccional',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Daivid Johan Cortés Giraldo',
          cargo: 'Evaluador de contenidos',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
