import logo from '../assets/logo.jpeg'

export default function About() {
  return (
   <section id="sobre-mi" className="py-20 px-6">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Foto Profesional */}
    <div className="w-64 h-64 md:w-80 md:h-80 shrink-0">
      <img 
        src={logo} 
        alt="Lourdes Ramos Díaz - Contadora Pública" 
        className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl" 
      />
    </div>

    {/* Contenido */}
    <div>
      <h2 className="text-3xl font-bold mb-6 text-slate-900">Sobre Mí</h2>
      <p className="text-lg text-slate-600 mb-6 italic">
        "Mi misión es transformar el orden contable en tu ventaja competitiva, permitiéndote liderar tu negocio con total tranquilidad financiera."
      </p>
      
      <p className="text-slate-600 leading-relaxed mb-6">
        Soy <strong>Lourdes Ramos Díaz</strong>, Contadora Pública Colegiada (CPCC). Cuento con más de 9 años de trayectoria gestionando el crecimiento financiero de diversas organizaciones. Mi enfoque combina la precisión de las <strong>Normas Internacionales de Información Financiera (NIIF)</strong> con la eficiencia de herramientas digitales de vanguardia como <strong>SAP</strong> y sistemas SUNAT (PLE/SIRE).
      </p>

      <p className="text-slate-600 leading-relaxed mb-6">
        He asesorado empresas en sectores corporativos y pymes, brindando soluciones integrales en auditoría, costos, tributación y gestión de planillas. Mi objetivo es que cada cliente cuente con información exacta y oportuna para la toma de decisiones estratégicas.
      </p>

      <div className="flex flex-wrap gap-4">
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold border border-blue-200">
          CPCC Colegiada (Matrícula 6670)
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold border border-blue-200">
          Experta en SAP y ERPs
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold border border-blue-200">
          Normativa NIIF
        </span>
      </div>
    </div>
  </div>
</section>
  );
}