import React from 'react'
import './Portafolio.css'
import Stock from '../../assets/Stock.jpg'
import Logo from '../../assets/Logo.jpg'
import Encriptador from '../../assets/encriptador.jpg'


const data = [

  {
    id:1,
    image:Stock,
    title:'Stock Empresa Equellin',
    github:'https://github.com/OctavioBalverdi/Stock',
    demo:'https://github.com/OctavioBalverdi/Stock',
  },
  {
    id:2,
    image:Encriptador,
    title:'Encriptador',
    github:'https://github.com/OctavioBalverdi/encriptador',
    demo:'https://github.com/OctavioBalverdi/encriptador',
  },
  {
    id:3,
    image:Logo,
    title:'Cartilla Medica',
    github:'https://github.com/OctavioBalverdi/Metodologia',
    demo:'https://github.com/OctavioBalverdi/Metodologia',
  },
]


const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo}) =>  {
            return(
            <article key={id} className="portfolio_items">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live
          Demo</a>
          </div>
        </article>
          )}
        )}
      </div>
    </section>
  )
}

export default Portafolio