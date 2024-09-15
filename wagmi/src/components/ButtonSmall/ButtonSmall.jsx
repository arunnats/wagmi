import React from "react";

const ButtonSmall = ({ text, href, alt }) => {
	return (
		<>
			{alt ? (
				<a href={href}>
					<div className="w-[150px] h-[50px] rounded-[14px] border-black border-[2px] border-solid flex items-center justify-center">
						<h2 className="text-[16px] font-gilmer text-wagmi-white">{text}</h2>
					</div>
				</a>
			) : (
				<a href={href}>
					<div className="w-[150px] h-[50px] rounded-[14px] border-wagmi-blue border-[2px] border-solid flex items-center justify-center">
						<h2 className="text-[16px] font-gilmer text-black">{text}</h2>
					</div>
				</a>
			)}
		</>
	);
};

export default ButtonSmall;
