export default function Services() {
    const services = [
        {
            title: 'Declaración de Impuestos',
            desc: 'Presentación mensual y anual ante SUNAT de forma exacta y puntual.'
        },
        {
            title: 'Constitución de Empresas',
            desc: 'Te ayudamos a formalizar tu negocio desde cero, eligiendo el régimen ideal.'
        },
        {
            title: 'Gestión Binacional (Perú - Colombia)',
            desc: 'Experiencia contable transfronteriza manejando normativas SUNAT y DIAN mediante herramientas digitales.'
        },
        {
            title: 'Planillas y RRHH',
            desc: 'Gestión de boletas, gratificaciones y beneficios sociales bajo ley peruana.'
        },
        {
            title: 'Auditoría Contable',
            desc: 'Revisión detallada de estados financieros para mitigar riesgos y multas.'
        },
    ];

    return (
        <section id="servicios" className="py-20 bg-blue-600">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16 text-white">Nuestros Servicios</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}