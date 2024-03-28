import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./testimonials.css";

import data from "./data.js";

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
                    {data.map((e, i) => (
                        <SwiperSlide className="testimonials" key={e.id}>
                            <div className="client__avatar">
                                <img src={e.avatar} alt="" />
                            </div>
                            <h5 className="client__name">{e.name}</h5>
                            <h6 className="client__name">{e.time}</h6>
                            <small className="client__review">{e.review}</small>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default Testimonials;
