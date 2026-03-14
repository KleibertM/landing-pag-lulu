export default function Services() {
    const servicesData = [
        {
            title: 'Especialista en Gestión Integral',
            // La descripción ahora integra Costos, Impuestos y NIIF de forma fluida
            description: 'Control estratégico de su rentabilidad mediante la gestión de costos, cumplimiento tributario riguroso y estados financieros bajo estándares internacionales NIIF.',
            icon: '⚖️', // La balanza representa el equilibrio entre lo financiero y lo legal (más profesional que una gráfica)
            features: [
                'Costos y Presupuestos Industriales',
                'Estrategia Tributaria Avanzada',
                'Cumplimiento de Normativas NIIF'
            ]
        },
        {
            title: 'Gestión Tributaria & PLE/SIRE',
            description: 'Regularización y presentación mensual de impuestos (PDT 621, PLAME) asegurando el cumplimiento con los nuevos sistemas electrónicos de SUNAT.',
            icon: '📊',
            features: ['Libros Electrónicos SIRE', 'Liquidación de Impuestos', 'Consultas Detracciones']
        },
        {
            title: 'Contabilidad Internacional Binacional',
            description: 'Asesoría especializada para negocios que operan entre Perú y Colombia. Manejo de normativas tributarias transfronterizas y herramientas digitales.',
            icon: '🌎',
            features: ['Reportes bajo NIIF', 'Gestión SUNAT & DIAN', 'Soporte Remoto Digital']
        },
        {
            title: 'Outsourcing Contable en SAP',
            description: 'Gestión profesional de cuentas utilizando sistemas de clase mundial. Análisis de pólizas, provisiones y conciliaciones bancarias masivas.',
            icon: '💻',
            features: ['Dominio de SAP / ERP', 'Análisis de Cuentas', 'Control de Activos']
        },
        {
            title: 'Planillas y Beneficios Sociales',
            description: 'Administración integral de nóminas, cálculo de CTS, gratificaciones, vacaciones y liquidación de beneficios sociales bajo ley laboral.',
            icon: '👥',
            features: ['Elaboración de Boletas', 'Gestión de AFP/T-Registro', 'Costos Laborales']
        },
        {
            title: 'Auditoría y Costos Industriales',
            description: 'Control de inventarios (Kardex) y determinación de costos de ventas para optimizar la rentabilidad de empresas comerciales e industriales.',
            icon: '🔍',
            features: ['Control de Inventarios', 'Presupuestos Mensuales', 'Análisis Financiero']
        }
    ];

    return (
        <section id="servicios" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
                            Soluciones Profesionales
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Servicios Contables con <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Enfoque Tecnológico
                            </span>
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xs font-bold border border-blue-100 uppercase tracking-wider">
                            Asesoría Personalizada
                        </span>
                        <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xs font-bold border border-blue-100 uppercase tracking-wider">
                            Gestión de Planillas
                        </span>
                        <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xs font-bold border border-blue-100 uppercase tracking-wider">
                            Estrategia Tributaria
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, i) => (
                        <div
                            key={i}
                            className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                        >
                            <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">
                                {service.icon}
                            </div>

                            <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h4>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="flex items-center text-sm font-semibold text-slate-700">
                                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Llamado a la acción sutil */}
                <div className="mt-20 bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h4 className="text-3xl font-bold mb-4">¿Necesitas regularizar tu situación tributaria?</h4>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                            No esperes a recibir una notificación de SUNAT o la DIAN. Evaluemos hoy mismo tu historial contable.
                        </p>
                        <a
                            href="#contacto"
                            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
                        >
                            Solicitar Asesoría Gratuita
                        </a>
                    </div>
                    {/* Círculos decorativos */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-500 rounded-full opacity-20"></div>
                </div>
            </div>
        </section>
    );
}