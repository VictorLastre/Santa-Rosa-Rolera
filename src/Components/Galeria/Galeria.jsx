import React from 'react'
import './Galeria.css'
import galeria_1 from '../../assets/galeria1.jpg'
import galeria_2 from '../../assets/galeria2.jpg'
import galeria_3 from '../../assets/galeria3.jpg'
import galeria_4 from '../../assets/galeria4.jpg'
import white_arrow from '../../assets/white_arrow.png'


const Galeria = () => {
  return (
    <div className='campus'>
        <div className='galeria'>
            <img src={galeria_1} alt="" />
            <img src={galeria_2} alt="" />
            <img src={galeria_3} alt="" />
            <img src={galeria_4} alt="" />
        </div> 
        <button className='btn dark-btn'>Ver mas <img src={white_arrow} alt="" /></button>     
    </div>
  )
}

export default Galeria
