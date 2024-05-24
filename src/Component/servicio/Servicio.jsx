import React from 'react'
import './Servicio.css'
import { BsFillPatchCheckFill } from "react-icons/bs";



const Servicio = () => {
  return (
    <section id='servicio'>
        <h5>What I offer</h5>
        <h2>Services</h2>
        <div className="container services_container">
        <article className="service">
        <div className="service_head">
        <h3>Web Development</h3>
        </div>
        <ul className="service_list">
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        </ul>
        </article>

        <article className="service">
        <div className="service_head">
        <h3>PC Repairman</h3>
        </div>
        <ul className="service_list">
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        </ul>
        </article>

        <article className="service">
        <div className="service_head">
        <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        <li>
        <BsFillPatchCheckFill className='service_list-icon' />
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </li>
        </ul>
        </article>
</div>
    </section>
  )
}

export default Servicio