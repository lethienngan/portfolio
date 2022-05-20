import React, { useRef } from 'react'
import { AiOutlineMail, AiFillLinkedin, AiFillPhone } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import './contact.css'
const Contact = () => {
    const form = useRef()

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm("service_bgtnx5j", "template_biapssc", form.current, 'eU9qUrneYmUT43p2d');
            console.log(result)
        } catch (e) {
            console.log(e)
        }
        e.target.reset()
    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>lethienngan95@gmail.com</h5>
                        <a href="mailto:lethienngan95@gmail.com" target='_blank'>Send a message to me</a>
                    </article>
                    <article className="contact__option">
                        <AiFillPhone className="contact__option-icon" />
                        <h4>Phone </h4>
                        <h5>0934491027</h5>
                        <h6>&#40;Zalo connect if you're in VietNam&#41;</h6>
                        <a href="https://chat.zalo.me/">Connect my Zalo</a>
                    </article>
                    <article className="contact__option">
                        <AiFillLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>https://www.linkedin.com/in/ng%C3%A2n-l%C3%AA-thi%E1%BB%87n-369132178</h5>
                        <a href="https://www.linkedin.com/in/ng%C3%A2n-l%C3%AA-thi%E1%BB%87n-369132178/" target='_blank'>Connect with me</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your name" required />
                    <input type="email" name="email" placeholder="Your email" required />
                    <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact