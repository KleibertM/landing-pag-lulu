export default function Experience() {
    // Objeto de datos: Fácil de actualizar si Lourdes obtiene más certificaciones
    const experienceData = {
        title: "Trayectoria y Respaldo Profesional",
        description: "Contadora Pública Colegiada con especialización en sistemas ERP y normativa internacional.",
        items: [
            { 
                value: 'CPCC 6670', 
                label: 'Colegiatura Habilitada',
                detail: 'Colegio de Contadores Públicos del Callao' 
            },
            { 
                value: '8+ Años', 
                label: 'Experiencia Contable',
                detail: 'Sectores BPO, Industrial y Servicios' 
            },
            { 
                value: 'SAP / ERP', 
                label: 'Sistemas Dominados',
                detail: 'Manejo avanzado de SAP, Contanet y Edwin' 
            },
            { 
                value: 'NIIF / SIRE', 
                label: 'Especialista Normativa',
                detail: 'Actualizada en PLE, SIRE y Normas Internacionales' 
            },
        ]
    };

    return (
        <section id="experiencia" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Decoración sutil de fondo */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        {experienceData.title}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {experienceData.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experienceData.items.map((item, i) => (
                        <div 
                            key={i} 
                            className="bg-glass p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                        >
                            <div className="text-3xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform origin-left">
                                {item.value}
                            </div>
                            <div className="text-white font-bold text-lg mb-1">
                                {item.label}
                            </div>
                            <div className="text-slate-400 text-sm leading-relaxed">
                                {item.detail}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logros adicionales extraídos del CV */}
                <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h3 className="text-xl font-bold mb-2">Formación Académica</h3>
                        <p className="text-slate-400 text-sm">Universidad Peruana Simón Bolívar - Licenciada en Contabilidad</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-6 py-3 bg-blue-600/20 rounded-lg border border-blue-500/30 text-blue-400 font-bold text-sm">
                            Portugués Intermedio
                        </div>
                        <div className="px-6 py-3 bg-cyan-600/20 rounded-lg border border-cyan-500/30 text-cyan-400 font-bold text-sm">
                            Excel Avanzado
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}