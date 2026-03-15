export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-slate-50"
        >
            {/* Decoración de fondo para resaltar el estilo moderno */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-cyan-100/40 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                    {/* Badge de Colegiatura y Especialidad */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8 animate-fade-in">
                        <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">
                            CPCC 6670 • Especialista SAP & SIRE
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-slate-900 tracking-tight">
                        Servicio Contable <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            Sin Fronteras.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Asesoría profesional para empresas en <span className="font-bold text-slate-800">Perú y Colombia</span>. 
                        Regularizamos tu situación ante <span className="underline decoration-blue-500 decoration-2 underline-offset-4">SUNAT y DIAN</span> con herramientas digitales de última generación.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <a
                            href="https://wa.me/51933704881?text=Hola%20Lourdes%2C%20estoy%20interesado%20en%20solicitar%20una%20consultor%C3%ADa.%20Podr%C3%ADas%20ayudarme%3F"
                            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg" 
                        >
                            Solicitar Consultoría
                        </a>
                        <a
                            href="#servicios"
                            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
                        >
                            Ver Especialidades
                        </a>
                    </div>

                    {/* Prueba Social / Software */}
                    <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expertise en:</span>
                        <span className="font-black italic text-slate-500">SAP ERP</span>
                        <span className="font-black text-slate-500 tracking-tighter">SIRE/PLE</span>
                        <span className="font-black text-slate-500">NIIF</span>
                    </div>
                </div>

                <div className="flex-1 relative">
                    {/* Elemento decorativo detrás de la imagen */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-[2.5rem] blur-2xl opacity-10 animate-pulse"></div>
                    
                    <div className="relative">
                        <img
                            src="https://sercofi.pe/wp-content/uploads/2024/02/imagen-sercofi-blog-lima-peru-5-1024x576.webp"
                            alt="Lourdes Ramos Díaz - Contadora Pública Colegiada"
                            className="rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 relative z-10 w-full object-cover aspect-[4/3] lg:aspect-auto"
                        />
                        
                        {/* Pequeña tarjeta flotante (Efecto Glass) */}
                        <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white hidden md:block z-20 animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-xl">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">100% Cumplimiento</p>
                                    <p className="text-xs text-slate-500">Libre de multas SUNAT/DIAN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}