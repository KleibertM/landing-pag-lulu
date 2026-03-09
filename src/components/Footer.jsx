export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6" id="footer">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Columna 1: Branding y Propósito */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-white text-xl font-bold mb-4">Lourdes <span className="text-blue-400">Contadora</span></h3>
                        <p className="text-sm leading-relaxed opacity-80">
                            Asesoría contable, tributaria y laboral con enfoque en el crecimiento sostenible de emprendedores y empresas en todo el Perú.
                        </p>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Navegación</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#inicio" className="hover:text-blue-400 transition">Inicio</a></li>
                            <li><a href="#servicios" className="hover:text-blue-400 transition">Servicios</a></li>
                            <li><a href="#sobre-mi" className="hover:text-blue-400 transition">Sobre Mí</a></li>
                            <li><a href="#contacto" className="hover:text-blue-400 transition">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Servicios Destacados */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Servicios</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="opacity-80">Declaración Mensual</li>
                            <li className="opacity-80">Constitución de Empresas</li>
                            <li className="opacity-80">Asesoría Laboral</li>
                            <li className="opacity-80">Planeamiento Tributario</li>
                        </ul>
                    </div>

                    {/* Columna 4: Horario y Redes */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Atención</h4>
                        <p className="text-sm mb-4 opacity-80">Lun - Vie: 9:00 AM - 6:00 PM</p>
                        <div className="flex gap-4 mt-6">
                            {/* Icono LinkedIn (Representativo para contadores) */}
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            {/* Icono Facebook */}
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-800 transition">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea Divisora Final */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 text-center gap-4">
                    <p>© {currentYear} Lourdes Contadora. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">Términos y Condiciones</a>
                        <a href="#" className="hover:underline">Políticas de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}