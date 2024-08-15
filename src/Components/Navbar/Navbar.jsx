import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' /> 
        <ul>
            <li>Home</li>
            <li>Sobre Nosotros</li>
            <li>Eventos</li>
            <li><button className='btn'>Contactanos</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
