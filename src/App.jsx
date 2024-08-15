import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Events from './Components/Events/Events'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Galeria from './Components/Galeria/Galeria'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Estos son' title='Nuestros eventos' />
        <Events />
        <About />
        <Title subTitle='Galeria' title='Fotos de eventos' />
        <Galeria />
        <Title subTitle='Testimonios' title='que dicen los jugadores' />
        <Testimonials />
        <Title subTitle='contactenos' title='ponganse en contacto' />
        <Contact />
      </div>
    </div>
  )
}

export default App