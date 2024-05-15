import React from 'react'
import CVI from '../../assets/CVI.pdf'
import CVE from '../../assets/CVE.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CVI} download className='btn'>Download CV Inglish</a>
        <a href={CVE} download className='btn'>Download CV Español</a>
        <a href="#contact" className='btn btn-primary'>Let's a Talk</a>
    </div>
  )
}

export default CTA