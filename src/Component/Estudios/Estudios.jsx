import React from 'react'
import './Estudios.css'
import INA from '../../assets/INA.jpg'
import UTN from '../../assets/UTN.jpg'
import Udemy from '../../assets/Udemy.png'
import Alura from '../../assets/Alura.jpg'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
{
avatar: INA,
nombre: "Polymodal in Humanities and Social Science",
review: "Instituto Nicolas Avellaneda, San Miguel de tucuman. 2005-02 - 2012-12"
},
{
avatar: UTN,
nombre: "UTN, Universidad Tecnologica de Tucuman, Higher Technique in Programming",
review: "2022-03 - present"
},
{
avatar: Udemy,
nombre: 'React Native MVVM Udemy',
review: 'I2023 '
},
{
avatar: Alura,
nombre: 'React desde Cero - Oracle Alura',
review: 'BootCamp 2023  '
}
]

const Estudios = () => {
  return (
    <section id='estudios'>
        <h5>Studies</h5>
          <h2>Universities and courses</h2>

        <Swiper className="container estudios_container"
         modules={[ Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}>
            {
                 data.map(({avatar, nombre, review}, index) => {
                    return(
                    <SwiperSlide key={index} className="estudios">
                    <div className="client_avatar">
                    <img src={avatar}/>
                    </div>
                    <h5 className='Cursado'>{nombre}</h5>
                    <small className='carrera'>{review}</small>
                    </SwiperSlide>
                    )})
            }
        </Swiper>
    </section>
  )
}

export default Estudios



    data.map(({avatar, name, review}, index) => {
    return (
    <SwiperSlide key={index} className="estudios">
    <div className="client_avatar">
    <img src={avatar}/>
    </div>
    <h5 className='Cursado'>{name}</h5>
    <small className='Carrera'>{review}</small>
    </SwiperSlide>
    )
    })