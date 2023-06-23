import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "../Techs.css";
function Tech({ data, name }) {
	return (
		<article className="tech">
			<div className="tech__head">
				<h3>{name}</h3>
			</div>
			<ul className="tech__list">
				{data.map((e, i) => (
					<li key={i}>
						<AiOutlineCheck className="tech__list-icon" />
						<p>{e}</p>
					</li>
				))}
			</ul>
		</article>
	);
}

export default Tech;
