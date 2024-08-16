import React, { useRef } from 'react';
import './Testimonials.css'
import next_img from '../../assets/next.png'
import back_img from '../../assets/back.png'
import dnd from '../../assets/dnd_logo.png'
import cthulhu from '../../assets/call-of-cthulhu.jpg'
import lancer from '../../assets/lancer.jpg'
import wh_fantasy from '../../assets/wh-fantasy.jpg'

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
                    Es un juego de rol de fantas�a heroica en el que los jugadores crean historias en mundos de espada y brujer�a.  <br />
                    Los jugadores se ponen en la piel de poderosos h�roes o antih�roes y se enfrentan a monstruos, objetos m�gicos y diversas situaciones.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={cthulhu} alt="" />
                        <div>
                            <h3>La Llamada de Cthulhu</h3>
                            <span>Horror c�smico</span>
                        </div>
                    </div>
                    <p>
                    es un juego de rol de horror ambientado en los a�os veinte y en particular en los �mitos de Cthulhu�, universo de ficci�n iniciado por el escritor estadounidense Howard Phillips Lovecraft. 
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={lancer} alt="" />
                        <div>
                            <h3>Lancer</h3>
                            <span>ciencia ficci�n militar</span>
                        </div>
                    </div>
                    <p>
                    Lancer es un juego de rol de mesa que se centra en las narrativas compartidas, los mechas personalizables y los pilotos que los manejan. El juego est� ambientado en un futuro en el que la humanidad ha sobrevivido a un colapso ecol�gico en la Tierra y se ha esparcido hasta las estrellas.
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
                    Es un juego de rol de fantas�a que te lleva al Viejo Mundo, un lugar oscuro y traicionero donde el caos acecha en cada esquina. 
                    En el juego, re�nes una banda, creas tus h�roes y te abres paso a trav�s de corrupciones, conspiradores y criaturas terror�ficas.
                    </p>
                </div>
            </li>
        </ul>        
      </div>
    </div>
  )
}

export default Testimonials
