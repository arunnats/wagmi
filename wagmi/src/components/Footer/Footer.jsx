import React from "react";
import wagmiIcon from "../.././assets/images/wagmiIcon.svg";

const Footer = () => {
	return (
		<div className="flex justify-center h-[250px] bg-wagmi-blue relative mt-[12vh] md:mt-[14vh] lg:mt-[18vh]">
			<div className="absolute -translate-y-16 w-36 h-36 shadow-[0px_7px_24.5px_rgba(0,_0,_0,_0.25)] rounded-full bg-wagmi-blue flex justify-center items-center">
				<img className="w-16 h-16 " src={wagmiIcon} alt="WAGMI Icon" />
			</div>
		</div>
	);
};

export default Footer;
