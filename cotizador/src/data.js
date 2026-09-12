export const catalog = [
  {
    id: 'automatizacion-basica',
    category: 'Automatización',
    name: 'Automatización de procesos',
    description: 'Flujos para conectar formularios, correos, planillas y sistemas.',
    price: 850000,
    unit: 'proyecto'
  },
  {
    id: 'dashboard-comercial',
    category: 'Datos',
    name: 'Dashboard comercial',
    description: 'Indicadores, filtros y reportes para tomar decisiones con datos.',
    price: 1250000,
    unit: 'proyecto'
  },
  {
    id: 'integracion-sistemas',
    category: 'Integraciones',
    name: 'Integración de sistemas',
    description: 'Conexión entre CRM, ERP, APIs y herramientas internas.',
    price: 980000,
    unit: 'proyecto'
  },
  {
    id: 'asistente-ia',
    category: 'IA aplicada',
    name: 'Asistente interno con IA',
    description: 'Consulta documental y apoyo operativo para equipos.',
    price: 1450000,
    unit: 'proyecto'
  },
  {
    id: 'soporte-mensual',
    category: 'Continuidad',
    name: 'Soporte y mejora continua',
    description: 'Bolsa mensual para ajustes, monitoreo y nuevas mejoras.',
    price: 390000,
    unit: 'mes'
  },
  {
    id: 'capacitacion',
    category: 'Continuidad',
    name: 'Capacitación para equipos',
    description: 'Sesiones prácticas para adoptar las soluciones implementadas.',
    price: 180000,
    unit: 'sesión'
  }
];

export const volumeDiscount = (items) => {
  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
  if (totalUnits >= 5) return 0.12;
  if (totalUnits >= 3) return 0.08;
  if (totalUnits >= 2) return 0.04;
  return 0;
};
