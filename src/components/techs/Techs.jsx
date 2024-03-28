import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Tech from "./tech/Tech";
import "./Techs.css";
import data from "./data"

const Techs = () => {
	return (
		<section id="techs">
			<h5>What Tools I used</h5>
			<h5>
				<small>Not good at all - still google & stackoverflow everything</small>
			</h5>
			<h2>Tools & Utilities</h2>

			<div className="container techs__container">
				{/* <Tech data={data.platform} name={"Platforms"} /> */}
				<Tech data={data.development} name={"Development"} />
				{/* <Tech data={data.AutomatedTesting} name={"Automated Testing"} /> */}
				<Tech data={data.libraryFramework} name={"Library & Frameworkd"} />
				<Tech data={data.platform} name={"Platform"} />
			</div>
		</section>
	);
};

export default Techs;
