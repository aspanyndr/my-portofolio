import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Foooter'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'



const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <Services />
    </>
    
  )
}

export default App