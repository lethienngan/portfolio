import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data = [
    {
        id: 0,
        image: IMG1,
        title: 'Analog Clock',
        description: 'Pure HTML/CSS and Vanilla Javascript',
        github: 'https://github.com/lethienngan/Analog-Clock',
        demo: 'https://lethienngan.github.io/Analog-Clock/',
    },
    {
        id: 1,
        image: IMG2,
        title: 'Dice Roller',
        description: 'React, Redux toolkit, Redux persist, Material UI',
        github: 'https://github.com/lethienngan/DiceRoller',
        demo: 'https://lethienngan-diceroller.netlify.app/',
    },
    {
        id: 2,
        image: IMG3,
        title: 'Task Manager',
        description: 'React, Redux toolkit, Redux persist, Ant Design',
        github: 'https://github.com/lethienngan/TaskManager',
        demo: 'https://lethienngan-taskmanager.netlify.app/',
    }
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map((e, i) => (
                        <article className="portfolio__item" key={e.id}>
                            <div className="portfolio__item-image">
                                <img src={e.image} alt="" />
                            </div>
                            <h3>{e.title}</h3>
                            <h5>{e.description}</h5>
                            <div className="portfolio__item-cta">
                                <a href={e.github} className='btn'>Github</a>
                                <a href={e.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    ))
                }

            </div>
        </section>
    )
}

export default Portfolio