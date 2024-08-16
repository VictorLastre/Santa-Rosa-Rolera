import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_logo from '../../assets/play_logo.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
            <img src={play_logo} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>SOBRE ASOCIACIÓN DE ROL LA PAMPA</h3>
            <h2>Este hobby que buscamos promover, posee numerosos beneficios, entre ellos:</h2>            
            <p>
              Ayuda a desarrollar la confianza en uno mismo, impulsa la creatividad, promueve la interacción entre las personas, etc. 
              Esto se debe a que dentro del juego se van generando situaciones que te piden trabajar en equipo, tomar diversas perspectivas 
              y crear soluciones a problemas con los recursos disponibles en cada escena. Además si te interesa el mundo de la actuación, 
              teatro, locución o si también tienes interés en la escritura y la narrativa, o si incluso sólo quieres pasar un buen rato y 
              reírte con amigos, estos juegos pueden ser ideales para tí.
            </p>
            <p>
              Hay aventuras y sistemas para todas las edades. Para niños, hay sistemas simplificados y abiertos, en donde puede haber desafíos 
              acorde a su perspectiva; como salvar un gato, recuperar un juguete extraviado o incluso aventurarse en un castillo o el espacio 
              exterior con el fin de descubrir maravillas. Para jóvenes y adultos, existen sistemas más y menos complejos, con mas o menos reglas, 
              en dónde se pueden encontrar aventuras de fantasía medieval, contempóraneas, galácticas, post apocalipticas, etc. Estas, a su vez, 
              pueden disponer de cualquier tono que deseen los jugadores, desde un tono ligero y suave, dónde sientes que el mundo te ayuda a 
              obtener lo que deseas y ser el héroe que siempre soñaste o al contrario, un tono oscuro y abrasivo, dónde sientes que el universo 
              conspira en tu contra poniéndote desafíos cada vez más difíciles, donde la esperanza, o quizá la codicia sea lo que te lleva adelante. 
              El único limitante para todo esto es la imaginación.
            </p>
            <p>
              Se trata de un pasatiempo en el que no se necesitan pantallas, sólo mucha imaginación y ganas de jugar (además de papel, lápiz y 
              algunos dados). ¡Ideal para jugar entre familia, con amigos o para conocer gente nueva!
            </p>
        </div>      
    </div>
  )
}

export default About
