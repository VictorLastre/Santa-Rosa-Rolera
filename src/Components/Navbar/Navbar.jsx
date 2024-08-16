import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import menu_icon from '../../assets/menu_icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : '' }`}>
        <img src={logo} alt="" className='logo' /> 
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-70} duration={500}>Sobre Nosotros</Link></li>
            <li><Link to='events' smooth={true} offset={-230} duration={500}>Eventos</Link></li>
            <li><Link to='campus' smooth={true} offset={-230} duration={500}>Galeria</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-180} duration={500}>Sistemas</Link></li>
            <li><Link to='contact' smooth={true} offset={-230} duration={500} className='btn'>Contactanos</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
