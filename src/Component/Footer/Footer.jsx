import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
<a href="#" className="footer_logo">OctavioB DEV</a>
<ul className="permalinks">
<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#skill">skill</a></li>
<li><a href="#portafolio">Portfolio</a></li>
<li><a href="#estudios">Studies</a></li>
<li><a href="#servicio">Services</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
<div className="footer_socials">
<a href="https://www.facebook.com/octavio.balverdi/"><FaFacebook/></a>
<a href="https://www.instagram.com/octaviobalverdi/"><FaInstagram  /></a>
<a href="https://twitter.com/BalverdiOctavio"><FaXTwitter  /></a>
</div>

<div className="footer_copyright">
<small>&copy; OctavioB DEV . All rights reserved.</small>
</div>
</footer>
  )
}

export default Footer