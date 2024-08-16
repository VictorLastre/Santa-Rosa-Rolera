import React from 'react'
import './Hero.css'
import mimic from '../../assets/mimic.webp'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>ASOCIACIÓN DE ROL LA PAMPA</h1>
        <p></p>
        <button className='btn'>Explorar dungeon <img src={mimic} alt="" /> </button>
      </div>      
    </div>
  )
}

export default Hero
