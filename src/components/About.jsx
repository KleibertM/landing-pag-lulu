export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-64 h-64 md:w-80 md:h-80 shrink-0">
          {/* Aquí iría la foto profesional de la contadora */}
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500" alt="Lourdes Contadora" className="w-full h-full object-cover rounded-full border-8 border-slate-100 shadow-xl" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Sobre Mí</h2>
          <p className="text-lg text-slate-600 mb-6 italic">
            "Mi misión es permitir que tú te enfoques en hacer crecer tu negocio mientras yo me encargo de que tus cuentas estén siempre claras y en regla."
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Soy Contadora Pública con más de [X] años de experiencia ayudando a pequeñas y medianas empresas a navegar el complejo sistema tributario peruano. Me especializo en planeamiento fiscal y optimización de costos.
          </p>
          <div className="flex gap-4">
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Habilitada por el CCPL</span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Especialista en MYPE</span>
          </div>
        </div>
      </div>
    </section>
  );
}