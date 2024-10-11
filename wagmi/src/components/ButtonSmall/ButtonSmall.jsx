import React from "react";

const ButtonSmall = ({ text, onClick, alt }) => {
	return (
		<>
			{alt ? (
				<div
					onClick={onClick} // Trigger the smooth scroll on click
					className="w-[150px] h-[50px] rounded-[14px] border-wagmi-white border-[2px] border-solid flex items-center justify-center cursor-pointer"
				>
					<h2 className="text-[16px] font-gilmer text-wagmi-white">{text}</h2>
				</div>
			) : (
				<div
					onClick={onClick} // Trigger the smooth scroll on click
					className="w-[150px] h-[50px] rounded-[14px] border-wagmi-blue border-[2px] border-solid flex items-center justify-center cursor-pointer"
				>
					<h2 className="text-[16px] font-gilmer text-black">{text}</h2>
				</div>
			)}
		</>
	);
};

export default ButtonSmall;
