import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Achievement from './components/Achievement'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import AISection from './components/AISection'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-primary font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievement />
      <Projects />
      <Certificates />
      <AISection />
      <Contact />
    </div>
  )
}
