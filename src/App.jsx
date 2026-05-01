import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImpactSnapshot from './components/ImpactSnapshot'
import About from './components/About'
import Credentials from './components/Credentials'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-100 antialiased selection:bg-cyan-300 selection:text-slate-950">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="ambient-grid absolute inset-0 -z-10 h-full w-full" />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[linear-gradient(110deg,rgba(34,211,238,0.14),transparent_38%,rgba(244,114,182,0.12)_72%,transparent)]" />
      </div>
      <div className="container mx-auto px-5 sm:px-8">
        <Navbar />
        <Hero />
        <ImpactSnapshot />
        <About />
        <Credentials />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
