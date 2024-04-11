import React from 'react'
import './about.css'
import ME from '../../assets/IMG_20220107_121021-removebg-preview.png'

const About = () => {
  return (
    
    <section id="about">
      <h5>
        Get To know
      </h5>
      <h2>
        About Me
      </h2>
    

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} />
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__cards'>
            <h5>Experience</h5>
            <small>3+ Years Working</small>

          </article>
        </div>

      </div>

    </div>
    </section>

  )
}

export default About