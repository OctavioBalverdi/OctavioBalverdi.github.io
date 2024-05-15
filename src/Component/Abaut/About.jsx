import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import { FaAward, FaUserCog  } from "react-icons/fa";
import { LuFolderCog2 } from "react-icons/lu";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
  <h2>About Me</h2>
  <div className="container about_container">
  <div className="about_me">
    <div className="about__me-image">
    <img src={ME} alt="About Image" />
    </div>
    </div>
    <div className="about_content">
      <div className="about_cards">
        <article className="about_card">
          <FaAward className="about_icon" />
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>

        <article className="about_card">
          <FaUserCog  className="about_icon" />
          <h5>Clients</h5>
          <small>2+ Worldwide</small>
        </article>

        <article className="about_card">
          <LuFolderCog2 className="about_icon" />
          <h5>Projects</h5>
          <small>3+ Completed</small>
        </article>
        </div>
        <p>
        Greetings! I'm a trainee programmer with strong expertise in React, HTML, CSS, JavaScript,
        and MySQL. My focus lies in crafting dynamic user interfaces with React, leveraging its
        capabilities for modern web applications. I use HTML and CSS skills to design engaging and
        functional pages. My experience with JavaScript becomes into creating interactive
        applications,I can manage MySQL databases in efficiently way for effective data handling.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's a Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About