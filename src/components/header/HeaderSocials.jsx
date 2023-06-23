import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/ng%C3%A2n-l%C3%AA-thi%E1%BB%87n-369132178/"
				target="_blank"
			>
				<BsLinkedin />
			</a>
			<a href="https://github.com/lethienngan" target="_blank">
				<FaGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;
