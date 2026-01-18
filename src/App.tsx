import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/globals.css'

function App() {
  const handleNavClick = (section: string) => {
    console.log('Navigating to:', section)
  }

  return (
    <>
      <Header onNavClick={handleNavClick} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
