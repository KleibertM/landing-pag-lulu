export default function Contact() {
    return (
        <section id="contactame" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="flex-1 bg-blue-600 p-12 text-white">
                        <h2 className="text-3xl font-bold mb-6">Contáctame Hoy</h2>
                        <p className="mb-8 opacity-90">Atención personalizada inmediata por cualquiera de estos canales.</p>

                        <div className="space-y-6">
                            <a href="tel:+51933704881" className="flex items-center gap-4 hover:underline">
                                <span>📞 +51 933 704 881</span>
                            </a>
                            <a href="mailto:info@contadora.com" className="flex items-center gap-4 hover:underline">
                                <span>✉️ info@contadora.com</span>
                            </a>
                            <div className="flex items-center gap-4 italic opacity-80">
                                <span>📍 Lima, Perú</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-[1.5] p-12">
                        <form className="grid grid-cols-1 gap-6">
                            <input type="text" placeholder="Tu Nombre" className="w-full p-4 bg-slate-50 border rounded-lg focus:outline-blue-500" />
                            <input type="email" placeholder="Correo Electrónico" className="w-full p-4 bg-slate-50 border rounded-lg focus:outline-blue-500" />
                            <textarea placeholder="Cuéntanos sobre tu pedido" rows="4" className="w-full p-4 bg-slate-50 border rounded-lg focus:outline-blue-500"></textarea>
                            <button className="bg-slate-900 text-white p-4 rounded-lg font-bold hover:bg-slate-800 transition">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}