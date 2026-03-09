export default function Experience() {
    const stats = [
        { label: 'Años de Experiencia', value: '10+' },
        { label: 'Clientes Satisfechos', value: '500+' },
        { label: 'Prendas Fabricadas', value: '10k+' },
    ];

    return (
        <section id="experiencia" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Nuestra Trayectoria</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-8 border border-slate-700 rounded-xl">
                            <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                            <div className="text-slate-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}