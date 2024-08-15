import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg.png'
import mobile_phone from '../../assets/mobile-phone.png'
import location from '../../assets/location.png'
import email from '../../assets/mail.png'


const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Envienos un mensaje <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
        </div>
        <div className='contact-col'>
            <ul>
                <li><img src={email} alt="" />algo@gmail.com</li>
                <li><img src={mobile_phone} alt="" />+54 2954-123456</li>
                <li><img src={location} alt="" />Calle sin nombre, sin munero <br />Santa Rosa La Pampa Argantina</li>
            </ul>
        </div>
    </div>
  )
}
import './Contact.css'

export default Contact
