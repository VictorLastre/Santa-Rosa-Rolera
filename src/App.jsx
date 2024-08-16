import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Events from './Components/Events/Events'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Galeria from './Components/Galeria/Galeria'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Estos son' title='Nuestros eventos' />
        <Events />        
        <Title subTitle='Galeria' title='Fotos de eventos' />
        <Galeria />
        <Title subTitle='Sistemas' title='que jugamos' />
        <Testimonials />
        <Title subTitle='contactenos' title='ponganse en contacto' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App