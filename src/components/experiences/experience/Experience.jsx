import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "../Experiences.css";

function Experience({ data }) {
	console.log(data[0]?.description);
	return (
		<div className="experience__frontend">
			<h3>Platform</h3>
			<div className="experience__content">
				{data.map((e, i) => (
					<article className="experience__details" key={i}>
						<div className="experience__icon_wrapper">
							<BsPatchCheckFill className="experience__icon" />
						</div>
						<div>
							<h4>{e.name}</h4>
							{e.description && <small>{e.description}</small>}
						</div>
					</article>
				))}
			</div>
		</div>
	);
}

export default Experience;
