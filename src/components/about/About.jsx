import React from 'react'
import { FaAward } from 'react-icons/fa'
import { MdDomain } from 'react-icons/md'
import { BsStackOverflow } from 'react-icons/bs'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                {/* About Image */}
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="profile picture" />
                    </div>
                </div>

                {/* About content */}
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>3 Year Working in Software Environment</small>
                        </article>
                        <article className="about__card">
                            <MdDomain className='about_icon' />
                            <h5>Domains</h5>
                            <small>Web, Web App, System</small>
                        </article>
                        <article className="about__card">
                            <BsStackOverflow className='about_icon' />
                            <h5>Projects</h5>
                            <small>Company Projects & Freelance Projects</small>
                        </article>
                    </div>

                    <p>
                        I'm Software Engineer graduated from University of Technology. My long-term goal is to be Fullstack developer. I'm able to work in Frontend & Backend Development
                    </p>
                    <p>
                        I enjoy being get out of my-box and open-mind with new platforms.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>

            </div>
        </section>
    )
}

export default About