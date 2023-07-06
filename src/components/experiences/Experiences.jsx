import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import Experience from "./experience/Experience";
import "./Experiences.css";

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
	platform: [
		{
			name: "AWS",
		},
		{
			name: "Linux-Ubuntu",
		},
		{
			name: "Hubspot",
		},
		{
			name: "Google API",
		},
	],
};
const Experiences = () => {
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Knowledge</h2>

			<div className="container experience__container">
				<Experience data={data.platform} />
				<Experience data={data.frontend} />
				<Experience data={data.backend} />
			</div>
		</section>
	);
};

export default Experiences;
