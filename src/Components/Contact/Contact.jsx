import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg.png'
import mobile_phone from '../../assets/mobile-phone.png'
import location from '../../assets/location.png'
import email from '../../assets/mail.png'
import white_arrow from '../../assets/white_arrow.png'



const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f9ac21da-6e4f-4170-9bf6-ca49ed88e45d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensaje enviado!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Envienos un mensaje <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
        
            <ul>
                <li><img src={email} alt="" />algo@gmail.com</li>
                <li><img src={mobile_phone} alt="" />+54 2954-123456</li>
                <li><img src={location} alt="" />Calle sin nombre, sin numero <br />Santa Rosa La Pampa Argentina</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Nombre</label>
            <input type="text" name='name' placeholder='Tu nombre' required />
            <label>Teléfono</label>
            <input type="tel" name='telefono' placeholder='Tu número de teléfono' required />
            <label>Escribe tu mensaje aquí</label>
            <textarea name="mensaje" rows="6" required ></textarea>
            <button type='submit' className='btn dark-btn'>Enviar ahora <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}
import './Contact.css'

export default Contact
