import React from 'react'
import './Hero.css'
import mimic from '../../assets/mimic.webp'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Para difundir la cultura del rol</h1>
        <p>Insertar un texto de muestra aqui</p>
        <button className='btn'>Explorar dungeon <img src={mimic} alt="" /> </button>
      </div>      
    </div>
  )
}

export default Hero
