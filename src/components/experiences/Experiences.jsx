import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import Experience from "./experience/Experience";
import "./Experiences.css";
import data from "./data";

const Experiences = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Knowledge</h2>

            <div className="container experience__container">
                <Experience data={data.platform} name={"Platform"} />
                <Experience data={data.frontend} name={"Frontend"} />
                <Experience data={data.backend} name={"Backend"} />
            </div>
        </section>
    );
};

export default Experiences;
