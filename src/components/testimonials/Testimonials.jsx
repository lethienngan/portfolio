import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.png'
import AVATAR3 from '../../assets/avatar3.jpg'

const data = [
    {
        id: 0,
        avatar: AVATAR1,
        name: 'Robert Bosch - RBVH',
        time: '4 months',
        review: "Develope & Maintain CAN data bus - COM in BSW for Vehicle System. Analyze Requirement and implement customer's configuration to component/module code."
    },
    {
        id: 1,
        avatar: AVATAR2,
        name: 'Shinhan DS',
        time: '3 months',
        review: "Developing & Maintaining Webservices for Core Banking System. Build Screen & API for bank teller (fetch data - authen/author - transaction) with internal lib & framework"
    },
    {
        id: 2,
        avatar: AVATAR3,
        name: 'CMC Global',
        time: '9 months',
        review: "Automated Testing in Embedded Domain. White-box testing with MC/DC Coverage, support Dev (Indian & Chinese) to find defect & optimize with strictly code rule."
    },
    {
        id: 3,
        avatar: AVATAR3,
        name: 'CMC Global',
        time: '1+ year',
        review: "Developing & Maintaining (outsource) for web sytem. Build components depend on customer requirements with internal lib & framework"
    },
]
const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>My working history</h5>
            <h2>Experience</h2>

            <div className="container testimonials__container">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Navigation]}
                    navigation
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {
                        data.map((e, i) => (
                            <SwiperSlide className="testimonials" key={e.id}>
                                <div className="client__avatar" >
                                    <img src={e.avatar} alt="" />
                                </div>
                                <h5 className='client__name'>{e.name}</h5>
                                <h6 className='client__name'>{e.time}</h6>
                                <small className="client__review">{e.review}</small>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
export default Testimonials