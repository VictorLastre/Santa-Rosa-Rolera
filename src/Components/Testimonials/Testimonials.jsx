import React, { useRef } from 'react';
import './Testimonials.css'
import next_img from '../../assets/next.png'
import back_img from '../../assets/back.png'
import dnd from '../../assets/DnDLogo.png'
import cthulhu from '../../assets/Tutulu.png'
import lancer from '../../assets/LancerLogoNegro.png'
import wh_fantasy from '../../assets/Warhammer_Logo.png'
import vampiro from '../../assets/VampiroLogo.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img src={next_img} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_img} alt="" className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={dnd} alt="" />
                        <div>
                            <h3>Dungeons and Dragons</h3>
                            <span>Fantasia heroica</span>
                        </div>
                    </div>
                    <p>
                    Es un juego de rol de fantasía heroica en el que los jugadores crean historias en mundos de espada y brujería.  <br />
                    Los jugadores se ponen en la piel de poderosos héroes o antihéroes y se enfrentan a monstruos, objetos mágicos y diversas situaciones.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={cthulhu} alt="" />
                        <div>
                            <h3>La Llamada de Cthulhu</h3>
                            <span>Horror cósmico</span>
                        </div>
                    </div>
                    <p>
                    Es un juego de rol de horror ambientado en los años veinte y en particular en los mitos de Cthulhu, universo de ficción iniciado por el escritor estadounidense Howard Phillips Lovecraft. 
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={lancer} alt="" />
                        <div>
                            <h3>Lancer</h3>
                            <span>ciencia ficción militar</span>
                        </div>
                    </div>
                    <p>
                        Lancer es un juego de rol de mesa que se centra en las narrativas compartidas, los mechas personalizables y los pilotos que los manejan. 
                        El juego está ambientado en un futuro en el que la humanidad ha sobrevivido a un colapso ecológico en la Tierra y se ha esparcido hasta 
                        las estrellas.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={wh_fantasy} alt="" />
                        <div>
                            <h3>Warhammer Fantasy</h3>
                            <span>Fantasia heroica oscura</span>
                        </div>
                    </div>
                    <p>
                    Es un juego de rol de fantasía que te lleva al Viejo Mundo, un lugar oscuro y traicionero donde el caos acecha en cada esquina. 
                    En el juego, reúnes una banda, creas tus héroes y te abres paso a través de corrupciones, conspiradores y criaturas terroríficas.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={vampiro} alt="" />
                        <div>
                            <h3>Vampiro la mascarada</h3>
                            <span>Fantasia heroica oscura</span>
                        </div>
                    </div>
                    <p>
                        Es un juego de rol donde personificas al monstruo, te enfrentas a las dificultades que tiene el mundo moderno así como también las del mundo vampírico. Debes cuidar tu identidad para no romper La Mascarada, a la vez que resuelves misterios, enigmas y tratas de no perder la poca humanidad que te queda.                    
                    </p>
                </div>
            </li>
        </ul>        
      </div>
    </div>
  )
}

export default Testimonials
