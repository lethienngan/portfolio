import React from 'react'
import './header.css'
import CTA from './CTA'
import POTRAIT from '../../assets/Potrait.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Le Thien Ngan</h1>
                <h5 className="text-light">Software Engineer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={POTRAIT} alt="profile picture" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header