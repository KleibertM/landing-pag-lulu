export default function Hero() {
    return (
        <section
            id="inicio"
            className="pt-24 pb-12 md:pt-32 md:pb-24 px-6 bg-white"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                        Asesoría Contable & Tributaria
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 mb-6 text-slate-900">
                        Tranquilidad financiera en{" "}
                        <span className="text-blue-600">MANOS EXPERTAS.</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8">
                        Ayudamos a emprendedores y empresas a formalizarse, optimizar sus
                        impuestos y crecer sin preocupaciones ante la SUNAT.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contacto"
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 transition"
                        >
                            Solicitar Consultoría
                        </a>
                        <a
                            href="#servicios"
                            className="border border-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition text-slate-700"
                        >
                            Ver Servicios
                        </a>
                    </div>
                </div>
                <div className="flex-1">
                    {/* Imagen de una contadora profesional trabajando o una oficina moderna */}
                    <img
                        src="https://sercofi.pe/wp-content/uploads/2024/02/imagen-sercofi-blog-lima-peru-5-1024x576.webp"
                        alt="Contabilidad Profesional"
                        className="rounded-2xl shadow-2xl border-b-8 border-blue-600"
                    />
                </div>
            </div>
        </section>
    );
}
