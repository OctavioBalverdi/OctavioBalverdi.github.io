import React from 'react'
import './Nav.css'
import { FaHome,FaRegUserCircle,FaBriefcase  } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { GrContact, GrServices } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";

const Nav = () => {

  
  return (
    <nav>
      <a href="#" className='active'><FaHome /></a>
      <a href="#about" className='active'><FaRegUserCircle /></a>
      <a href="#skill" className='active'><GiBookshelf /></a>
      <a href="#portafolio" className='active'><FaBriefcase /></a>
      <a href="#servicio" className='active'><GrServices /></a>
      <a href="#estudios" className='active'><PiStudentBold /></a>
      <a href="#contact" className='active'><GrContact /></a>
    </nav>
  )
}

export default Nav