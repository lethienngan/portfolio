import React from "react";
import "./header.css";
import CTA from "./CTA";
import { useState } from "react";

const Header = () => {


    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Le Thien Ngan</h1>
                <h4 className="text-light">Software Engineer</h4>
                <h5 className="text-light">Just call me Rich, Rich Le</h5>
                <CTA />
            </div>
        </header>
    );
};

export default Header;
