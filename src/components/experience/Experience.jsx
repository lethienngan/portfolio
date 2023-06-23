import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const data = {
	frontend: [
		{
			name: "HTML/CSS",
			description: "Intermediate",
		},
		{
			name: "Javascript",
			description: "Intermediate (ES6)",
		},
		{
			name: "React@ver17",
			description: "React HOOK & Redux",
		},
		{
			name: "UI framework",
			description: "MaterialUI v4, AntDesign (basic)",
		},
	],
	backend: [
		{
			name: "NodeJS",
			description: "using ExpressJS framework",
		},
		{
			name: "ExpressJS",
			description: "Intermediate",
		},
		{
			name: "noSQL",
			description: "MongoDB",
		},
		{
			name: "SQL",
			description: "postgreSQL",
		},
	],
};
const Experience = () => {
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Knowledge</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						{data.frontend.map((e, i) => (
							<article className="experience__details" key={i}>
								<div className="experience__icon_wrapper">
									<BsPatchCheckFill className="experience__icon" />
								</div>
								<div>
									<h4>{e.name}</h4>
									<small>{e.description}</small>
								</div>
							</article>
						))}
					</div>
				</div>

				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						{data.backend.map((e, i) => (
							<article className="experience__details" key={i}>
								<div div className="experience__icon_wrapper">
									<BsPatchCheckFill className="experience__icon" />
								</div>
								<div>
									<h4>{e.name}</h4>
									<small>{e.description}</small>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
