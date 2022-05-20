import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import './footer.css';
const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Made by Me</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Knowledge</a></li>
                <li><a href="#services">Tools</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">History</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/"><AiFillFacebook /></a>
                <a href="https://www.instagram.com/"><AiFillInstagram /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; My Portfolio. All right reserved</small>
            </div>
        </footer>
    )
}

export default Footer