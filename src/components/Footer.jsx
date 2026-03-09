export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6 border-t border-white/5" id="footer">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Columna 1: Branding y Respaldo Profesional */}
                    <div className="col-span-1">
                        <h3 className="text-white text-2xl font-black mb-6">
                            Lourdes <span className="text-blue-500">Ramos</span>
                        </h3>
                        <p className="text-sm leading-relaxed mb-6 opacity-70">
                            Contadora Pública Colegiada especializada en regularización tributaria y gestión contable bajo normativas NIIF para empresas en Perú y Colombia.
                        </p>
                        {/* Badge de Colegiatura en el Footer */}
                        <div className="inline-block px-3 py-1 border border-blue-500/30 rounded text-[10px] font-bold text-blue-400 uppercase tracking-tighter bg-blue-500/5">
                            Matrícula CPCC 6670
                        </div>
                    </div>

                    {/* Columna 2: Especialidades (SEO & Navegación) */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-4">
                            Servicios
                        </h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="hover:text-white transition cursor-default">Gestión PLE / SIRE</li>
                            <li className="hover:text-white transition cursor-default">Asesoría Binacional (DIAN/SUNAT)</li>
                            <li className="hover:text-white transition cursor-default">Outsourcing en SAP ERP</li>
                            <li className="hover:text-white transition cursor-default">Auditoría & Costos</li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto Directo */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-4">
                            Contacto
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">📧</span>
                                <a href="mailto:lourdesramosdiaz26@gmail.com" className="hover:text-white transition">lourdesramosdiaz26@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">📍</span>
                                <span>Lima, Perú | Operación Remota</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">🕒</span>
                                <span className="opacity-70">Lun - Vie: 9am a 6pm</span>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Conexión Profesional */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-4">
                            Redes Profesionales
                        </h4>
                        <p className="text-xs mb-6 opacity-70">Síguenos para actualizaciones tributarias y consejos contables.</p>
                        <div className="flex gap-4">
                            {/* LinkedIn - El más importante para ella */}
                            <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group">
                                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            {/* WhatsApp Directo */}
                            <a href="https://wa.me/51933704881" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 transition-all group">
                                <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium uppercase tracking-widest opacity-40 gap-6">
                    <p>© {currentYear} CPCC LOURDES RAMOS DÍAZ. TODOS LOS DERECHOS RESERVADOS.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition">Términos</a>
                        <a href="#" className="hover:text-white transition">Privacidad</a>
                        <p className="text-blue-400">Diseñado para Crecimiento Global</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}