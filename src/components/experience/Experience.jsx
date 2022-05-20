import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Knowledge</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>HTML/CSS</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>Javascript</h4>
                                <small>Intermediate (ES6)</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>React@ver17</h4>
                                <small>React HOOK & Redux</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>UI framework</h4>
                                <small>MaterialUI v4, AntDesign, ... (just basic)</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>NodeJS</h4>
                                <small>Using ExpressJS Framework</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>ExpressJS</h4>
                                <small>Intermediate (CRUD & auth)</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small>Mongoose lib for backend</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__icon' />
                            <div>
                                <h4>SQL</h4>
                                <small>Basic syntax for querying data</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience