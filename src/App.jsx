import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsAppBtn';

function App() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;