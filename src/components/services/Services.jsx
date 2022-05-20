import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import './services.css'

const data = {
    development: ['Visual Code (with extesions)', 'Eclipse IDE', 'Robo3T', 'Postman', 'Thunder Client', 'Redux devTool', 'Beyond Compare', 'Git', 'Jira'],
    AutomatedTesting: ['IBM RTRT (Rational Real Time Test)', 'Cantata', 'Internal testing tool'],
    libraryFramework: ['Proframe C', 'Adobe Flex', 'React', 'React Router', 'Redux toolkit', 'Redux Persist', 'ExpressJS', 'Handlebar (SSR)', 'Axios', 'jwt-decode', 'SwiperJS', 'EmailJS', 'Mongoose', 'dotenv', 'jsonwebtoken', 'bcrypt'],
}
const Services = () => {
    return (
        <section id="services">
            <h5>What Tools I used</h5>
            <h5><small>Not good at all - still google & stackoverflow everything</small></h5>
            <h2>Tools</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Development</h3>
                    </div>
                    <ul className="service__list">
                        {
                            data.development.map((e, i) => (

                                <li key={i}>
                                    <AiOutlineCheck className='service__list-icon' />
                                    <p>{e}</p>
                                </li>
                            ))
                        }
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Automated Testing</h3>
                    </div>
                    <ul className="service__list">
                        {
                            data.AutomatedTesting.map((e, i) => (

                                <li key={i}>
                                    <AiOutlineCheck className='service__list-icon' />
                                    <p>{e}</p>
                                </li>
                            ))
                        }
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Library & Framework</h3>
                    </div>
                    <ul className="service__list">
                        {
                            data.libraryFramework.map((e, i) => (

                                <li key={i}>
                                    <AiOutlineCheck className='service__list-icon' />
                                    <p>{e}</p>
                                </li>
                            ))
                        }
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services