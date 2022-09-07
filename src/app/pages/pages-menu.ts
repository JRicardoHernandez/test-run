import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Administración',
    icon: 'grid-outline',
    // children: [
    //   {
    //     title: 'Categorias',
    //     link: '/pages/admin/catalogs/categories',
    //   },
    //   {
    //     title: 'Leyendas',
    //     link: '/pages/admin/legends/official',
    //   },

    // ],
  },
  {
    title: 'Catalogos',
    icon: 'folder',
    children: [
      { title: 'Abogados', link: '/pages/admin/lawyer' },
      { title: 'Aclaraciones', link: '/pages/admin/clarification' },
      { title: 'Almacenes', link: '/pages/admin/warehouse' },
      { title: 'Asentamientos', link: '/pages/admin/settlement' },
      { title: 'Banco', link: '/pages/admin/bank' },
      { title: 'Bateria', link: '/pages/admin/battery' },
      { title: 'Bodega', link: '/pages/admin/storehouse' },
      { title: 'Bovedas', link: '/pages/admin/safe' },
      { title: 'Casilleros', link: '/pages/admin/locker' },
      { title: 'Categorias', link: '/pages/admin/catalogs/categories' },
      { title: 'Ciudades', link: '/pages/admin/city' },
      {
        title: 'Clasificacion Institucion',
        link: '/pages/admin/institution-classification'
      },
      {
        title: 'Clasificacion SatSae',
        link: '/pages/admin/satsae-classification'
      },
      {
        title: 'Clasificación SIAB',
        link: '/pages/admin/siab-clasification'
      },
      { title: 'Concepto Pagos', link: '/pages/admin/payments-concept' },
      {
        title: 'Conclusion siniestros',
        link: '/pages/admin/claim-conclusion'
      },
      { title: 'Código estado', link: '/pages/admin/status-code' },
      { title: 'Códigos postales', link: '/pages/admin/zip-code' },
      { title: 'Deductivas', link: '/pages/admin/deductives' },
      {
        title: 'Deductivas Verificación',
        link: '/pages/admin/deductive-verification'
      },
      { title: 'Delegaciones', link: '/pages/admin/delegation' },
      {
        title: 'Delegaciones de estado',
        link: '/pages/admin/delegation-state'
      },
      {
        title: 'Delegaciones regionales',
        link: '/pages/admin/regional-delegation'
      },
      { title: 'Departamentos', link: '/pages/admin/departament' },
      { title: 'Despachos', link: '/pages/admin/offices' },
      {
        title: 'Detalle Delegaciones',
        link: '/pages/admin/detail-delegation'
      },
      { title: 'Dictamen', link: '/pages/admin/opinion' },
      {
        title: 'Documentos resarcimiento',
        link: '/pages/admin/doc-resarcimiento'
      },
      {
        title: 'Documentos resarcimiento sat',
        link: '/pages/admin/doc-resarcimiento-sat'
      },
      {
        title: 'Documentos resarcimiento sat xml',
        link: '/pages/admin/doc-resarcimiento-sat-xml'
      },
      { title: 'Donatorios', link: '/pages/admin/grantees' },
      { title: 'Día festivo', link: '/pages/admin/holiday' },
      { title: 'Edos x Coor', link: '/pages/admin/edosxcoor' },
      { title: 'Emisora', link: '/pages/admin/station' },
      { title: 'Emisoras', link: '/pages/admin/station' },
      { title: 'Empresa terceros', link: '/pages/admin/third-company' },
      { title: 'Entfed', link: '/pages/admin/entfed' },
      { title: 'Estado', link: '/pages/admin/state-of-republic' },
      {
        title: 'Estado Transferencia',
        link: '/pages/admin/statustransfer'
      },
      { title: 'Estado repuves', link: '/pages/admin/repuve' },
      { title: 'Estatus general', link: '/pages/admin/general-status' },
      { title: 'Estatus proceso', link: '/pages/admin/status-process' },
      { title: 'Estatus sinisestros', link: '/pages/admin/claims-status' },
      { title: 'Etapas', link: '/pages/admin/stages' },
      { title: 'Etiqutas bien', link: '/pages/admin/label-okey' },
      { title: 'Fracciones', link: '/pages/admin/fractions' },
      { title: 'Gavetas', link: '/pages/admin/drawers' },
      { title: 'Genericos', link: '/pages/admin/generics' },
      { title: 'Gestión', link: '/pages/admin/management' },
      { title: 'Guarda Valores', link: '/pages/admin/save-values' },
      { title: 'Identificador', link: '/pages/admin/identifier' },
      { title: 'Indiciados', link: '/pages/admin/indiciados' },
      {
        title: 'Instituciones Emisoras',
        link: '/pages/admin/issuing-institution'
      },
      { title: 'Juzgados', link: '/pages/admin/court' },
      { title: 'Leyendas', link: '/pages/admin/legends/official' },
      { title: 'Localidades', link: '/pages/admin/localitys' },
      { title: 'Lotes', link: '/pages/admin/batch' },
      {
        title: 'Medio fotografia',
        link: '/pages/admin/medium-photography'
      },
      { title: 'Medio imagen', link: '/pages/admin/half-image' },
      { title: 'MinPub', link: '/pages/admin/minpub' },
      { title: 'Motivo Revision', link: '/pages/admin/revision-reason' },
      {
        title: 'Motivos no entrega',
        link: '/pages/admin/reasons/non-delivery-reasons'
      },
      { title: 'Municipios', link: '/pages/admin/municipalitys' },
      { title: 'Normas', link: '/pages/admin/norms' },
      { title: 'Notarios', link: '/pages/admin/notary' },
      { title: 'Parrafos', link: '/pages/admin/paragraphs' },
      { title: 'Penalizaciones', link: '/pages/admin/penalty' },
      { title: 'Peritos', link: '/pages/admin/proficient' },
      { title: 'Personas', link: '/pages/admin/person' },
      { title: 'Preguntas', link: '/pages/admin/question' },
      { title: 'Procedencia', link: '/pages/admin/origin' },
      { title: 'Procedencia Cisi', link: '/pages/admin/origin-cisi' },
      { title: 'Procesos SISE', link: '/pages/admin/siseProcess' },
      { title: 'Puntuaciones', link: '/pages/admin/score' },
      { title: 'R Asunt Dic', link: '/pages/admin/r-asunt-dic' },
      { title: 'Racks', link: '/pages/admin/rack' },
      { title: 'Regulatory', link: '/pages/admin/regulatory' },
      {
        title: 'Reporte Indicadores',
        link: '/pages/admin/indicator-report'
      },
      { title: 'Respuestas', link: '/pages/admin/response' },
      { title: 'Respuestas REPUVE', link: '/pages/admin/response-repuve' },
      {
        title: 'Sat Clasificacion',
        link: '/pages/admin/sat-clasification'
      },
      {
        title: 'Sat Subclasificacion',
        link: '/pages/admin/sat-subclasification'
      },
      { title: 'Series IFAI', link: '/pages/admin/ifai-serie' },
      { title: 'Servicios', link: '/pages/admin/service-cat' },
      { title: 'Situacion Bien', link: '/pages/admin/good-situation' },
      { title: 'Sssubtipo bien', link: '/pages/admin/good-sssubtype' },
      { title: 'Ssubtipo bien', link: '/pages/admin/good-ssubtype' },
      { title: 'SubDelegaciones', link: '/pages/admin/subdelegation' },
      { title: 'Subtipo Bienes', link: '/pages/admin/goods-subtype' },
      { title: 'Subtipo bien', link: '/pages/admin/good-subtype' },
      { title: 'Sustentos Legales', link: '/pages/admin/legal-support' },
      { title: 'Tipo Bien', link: '/pages/admin/good-type' },
      { title: 'Tipo Bienes', link: '/pages/admin/typegood' },
      { title: 'Tipo Docto', link: '/pages/admin/typedocto' },
      { title: 'Tipo Siniestro', link: '/pages/admin/sinister' },
      { title: 'Tipo de Almacenes', link: '/pages/admin/typewarehouses' },
      { title: 'Tipo de Servicios', link: '/pages/admin/type-services' },
      {
        title: 'Tipo orden servicio',
        link: '/pages/admin/typeorderservices'
      },
      { title: 'Tipo relevante', link: '/pages/admin/typerelevant' },
      { title: 'Zona Geográficas', link: '/pages/admin/zone-geographic' }
    
    ]
  },
  {
    title:'Solicitudes',
    icon:'file',
    children:[
      {
        title:'Solicitudes a turnar',
        link:'/pages/request/request-to-turn'
      },
      {
        title:'Crear solicitud',
        link:'/pages/request/create'
      }
    ]
  },
  {
    title: 'Main',
    icon: 'grid-outline',
    children: [
      {
        title: 'Main',
        link: '/pages/main/home',
      },

    ],
  },
  {
    title: 'Programming',
    icon: 'grid-outline',
    children: [
      {
        title: 'Goods Schedule',
        link: '/pages/programming/good-schedule',
      },

    ],
  },

  //Procesos ejecutivos
  {
    title: 'Procesos Ejecutivos',
    icon: 'grid-outline',
    children: [
      {
        title: 'Acumulado anual de bienes',
        //link: '/pages/ejecutivos/acumulado', Versión sin modal
        link: '/pages/executive-processes/a-accumulated-assets'
      },

      {
        title: 'Acumulado trimestral de bienes',
        link: '/pages/executive-processes/q-accumulated-goods',
      },

      {
        title: 'Gestión de Autorización de Destrucción',
        link: '/pages/executive-processes/destruction-auth-management',
      },

      {
        title: 'Autorización de Destrucción',
        link: '/pages/executive-processes/destruction-authorization',
      },

      {
        title: 'Aprobación donación',
        link: '/pages/executive-processes/donation-approval',
      },

      {
        title: 'Aprobación Destino',
        link: '/pages/executive-processes/approval-destination',
      },

      {
        title: 'Información Bienes Asegurados/Decomisos/Abandonos',
        link: '/pages/executive-processes/inf-A-Insured-Seizures-aband',
      },

      {
        title: '**Información de Bienes por Tipo y Subtipo',
        link: '/pages/executive-processes/info-goods-type-subtype',
      },

      {
        title: '**Integración Simplificada de Recepción Documental',
        link: '/pages/executive-processes/sim-doc-Recep-Int',
      },

      {
        title: 'Recepción de Doctos. x Destino en el SERA',
        link: '/pages/executive-processes/re-docs-x-sera',
      },

      {
        title: 'Recepción de Doctos. por Autoridad Emisora',
        link: '/pages/executive-processes/re-doc-iss-auth',
      },

      {
        title: 'Recepción Diaria de Expedientes',
        link: '/pages/executive-processes/daily-rec-files',
      },

      {
        title: 'Documentación recibida x Área Destino',
        link: '/pages/executive-processes/doc-re-des-area',
      },

      {
        title: 'Total de Documentación Recibida',
        link: '/pages/executive-processes/total-doc-received',
      },

      {
        title: 'Bienes recibidos en Administración',
        link: '/pages/executive-processes/assets-rec-admin',
      },

      {
        title: 'Actualización Masiva de Valor de Avaluo',
        link: '/pages/executive-processes/mass-app-val-upd',
      },
      

    ],
  },

  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },

];
