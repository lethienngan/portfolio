import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Tech from "./tech/Tech";
import "./Techs.css";

const data = {
	development: [
		"Visual Code | Eclipse IDE",
		"pgAdmin4",
		"Postman | REST client | Thunder Client",
		"Redux devTool",
		"Beyond Compare",
		"Git",
		"Jira",
		"Npm",
		"PM2 (procress Management)",
		"Caddy Server",
	],
	AutomatedTesting: [
		"IBM RTRT (Rational Real Time Test)",
		"Cantata",
		"Internal testing tool",
	],
	libraryFramework: [
		"Proframe C",
		"Adobe Flex",
		"React (CSR-SPA)",
		"React Router Dom",
		"Redux",
		"ExpressJS",
		"AWS-sdk",
		"GoogleAPI",
		"Axios",
		"Mongoose",
		"jsonwebtoken",
		"bcrypt",
		"... etc",
	],
	platform: [
		"AWS(...list all of features here)",
		"Ubuntu instance from AWS",
		"Hubspot (...list all of features here)",
		"Google API((...list all of features here))",
	],
};
const Techs = () => {
	return (
		<section id="techs">
			<h5>What Tools I used</h5>
			<h5>
				<small>Not good at all - still google & stackoverflow everything</small>
			</h5>
			<h2>Tools & Utilities</h2>

			<div className="container techs__container">
				<Tech data={data.development} name={"Development"} />
				<Tech data={data.AutomatedTesting} name={"Automated Testing"} />
				<Tech data={data.libraryFramework} name={"Library & Frameworkd"} />
			</div>
		</section>
	);
};

export default Techs;
