import React from 'react'
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="www.linkedin.com/in/octavio-balverdi-" target="_blank"><RxLinkedinLogo/></a>
        <a href="https://github.com/OctavioBalverdi" target="_blank"><RxGithubLogo /></a>
        
    </div>
  )
}

export default HeaderSocials