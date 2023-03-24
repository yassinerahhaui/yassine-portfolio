import './App.scss'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Skills />
      <Projects />
      <About />
      <Contact /> 
      <Footer />
    </div>
  )
}

export default App
