import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : '' }`}>
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
