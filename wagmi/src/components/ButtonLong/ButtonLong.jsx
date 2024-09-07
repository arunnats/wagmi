import React from "react";

const ButtonLong = ({ text, href }) => {
	return (
		<a href={href}>
			<div className="w-[300px] h-[50px] rounded-[14px] border-wagmi-blue border-[2px] border-solid flex items-center justify-center">
				<h2 className="text-[18px] font-gilmer text-black">{text}</h2>
			</div>
		</a>
	);
};

export default ButtonLong;
