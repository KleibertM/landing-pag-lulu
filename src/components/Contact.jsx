export default function Contact() {
    return (
        <section id="contactame" className="py-20 px-6  bg-blue-600">
            <div className="max-w-7xl mx-auto">
                <div className="bg-glass rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="flex-1 p-12 text-white">
                        <h2 className="text-3xl font-bold mb-6">Contáctame Hoy</h2>
                        <p className="mb-8 opacity-90">Atención personalizada inmediata por cualquiera de estos canales.</p>

                        <div className="space-y-6 text-lg text-white ">
                            <a href="tel:+51933704881" className="flex items-center gap-4  no-underline text-inherit hover:text-green-400">
                                <span>📞 +51 933 704 881</span>
                            </a>
                            <a href="mailto:info@contadora.com" className="flex items-center gap-4  no-underline text-inherit hover:text-green-400">
                                <span>✉️ info@contadora.com</span>
                            </a>
                            <div className="flex items-center gap-4 italic opacity-80">
                                <span>📍 Lima, Perú</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-[1.5] p-12">
                        {/* Endpoint de FormSubmit configurado con tu correo */}
                        <form
                            action="https://formsubmit.co/kleibertmedina@gmail.com"
                            method="POST"
                            className="grid grid-cols-1 gap-6"
                        >
                            {/* Honeypot para evitar SPAM (invisible para el usuario) */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://tu-web.vercel.app/gracias" />

                            <input
                                type="text"
                                name="nombre" // IMPORTANTE: Agregar name
                                placeholder="Tu Nombre"
                                required
                                className="w-full p-4 bg-slate-50 border rounded-lg focus:outline-blue-500"
                            />

                            <input
                                type="email"
                                name="email" // IMPORTANTE: Agregar name
                                placeholder="Correo Electrónico"
                                required
                                className="w-full p-4 bg-slate-50 border rounded-lg focus:outline-blue-500"
                            />

                            <textarea
                                name="mensaje" // IMPORTANTE: Agregar name
                                placeholder="Cuéntanos sobre tu consulta contable o internacional..."
                                rows="4"
                                required
                                className="w-full p-4 bg-slate-50 border rounded-lg focus:outline-blue-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-slate-900 text-white p-4 rounded-lg font-bold hover:bg-slate-800 transition shadow-lg"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}