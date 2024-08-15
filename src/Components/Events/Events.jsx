import React from 'react'
import './Events.css'
import event_1 from '../../assets/evento1.jpg'
import event_2 from '../../assets/evento2.jpg'
import event_3 from '../../assets/evento3.jpg'
import evento_dnd_logo from '../../assets/dnd_logo.png'
import evento_pathfinder_logo from '../../assets/pathfinder_logo.png'
import evento_cthulhu_logo from '../../assets/cthulhu_logo.png'

const Events = () => {
  return (
    <div className='events'>
        <div className='event'>
            <img src={event_1} alt="" />
            <div className='caption'>
                <img src={evento_dnd_logo} alt="" />
                <p>Evento 1</p>
            </div>
        </div>      
        <div className='event'>
            <img src={event_2} alt="" />
            <div className='caption'>
                <img src={evento_pathfinder_logo} alt="" />
                <p>Evento 1</p>
            </div>
        </div>      
        <div className='event'>
            <img src={event_3} alt="" />
            <div className='caption'>
                <img src={evento_cthulhu_logo} alt="" />
                <p>Evento 1</p>
            </div>
        </div>      
             
    </div>
  )
}

export default Events
