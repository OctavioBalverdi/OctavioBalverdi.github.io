import React from 'react'
import './Skill.css'
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiJavascript,SiTypescript, SiReact,SiElectron,SiBootstrap,SiNodedotjs,SiMysql,SiMongodb } from "react-icons/si";

const Experience = () => {
  return (
<section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
<div className="container experience_container">    
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
      <div className="experience_content">
      <article className="experience_details">
      <ImHtmlFive className='experience_details-icon'/>
      <div>
      <h4>HTML</h4>
      <small className='text-light'>Experienced</small>
      </div>
      </article>
      <article className="experience_details">
        <SiCss3 className='experience_details-icon'/>
        <div>
        <h4>CSS</h4>
      <small className='text-light'>Intermediate</small>
        </div>
      </article>
      <article className="experience_details">
        <SiJavascript className='experience_details-icon'/>
        <div>
        <h4>JavaScript</h4>
      <small className='text-light'>Experienced</small>
        </div>
      </article>
      <article className="experience_details">
      <SiTypescript className='experience_details-icon' />
      <div>
      <h4>TypeScript</h4>
      <small className='text-light'>Basic</small>
      </div>
      </article>
      <article className="experience_details">
      <SiReact className='experience_details-icon' />
      <div>
      <h4>React</h4>
      <small className='text-light'>Intermediate</small>
      </div>
      </article>
      <article className="experience_details">
      <SiBootstrap className='experience_details-icon' />
    <div>
    <h4>Bootstrap</h4>
      <small className='text-light'>Intermediate</small>
    </div>
      </article>
      <article className="experience_details">
      <SiElectron className='experience_details-icon' />
     <div>
     <h4>Electron</h4>
      <small className='text-light'>Basic</small>
     </div>
      </article>
      </div>
      </div>
      <div className="experience_backend">
      <h3>Backend Development</h3>
      <div className="experience_content">
      <article className="experience_details">
      <SiNodedotjs className='experience_details-icon'/>
    <div>
    <h4>Node js</h4>
      <small className='text-light'>Intermediate</small>
    </div>
      </article>
      <article className="experience_details">
      <SiMysql className='experience_details-icon'/>
      <div>
      <h4>MySQL</h4>
      <small className='text-light'>Experienced</small>
      </div>
      </article>
      <article className="experience_details">
      <SiMongodb className='experience_details-icon'/>
      <div>
      <h4>MongoDB</h4>
      <small className='text-light'>Basic</small>
      </div>
      </article>
      </div>
      </div>
</div>
</section>
  )
}

export default Experience
