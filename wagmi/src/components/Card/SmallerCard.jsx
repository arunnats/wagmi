import React from "react";

const CardComponent = ({ title, content }) => {
	return (
		<div className="relative w-[39vw] h-[21vw] md:w-[19.18665vw] md:h-[9.593325vw] rounded-[14px] overflow-hidden border-wagmi-blue border-[4px] border-solid bg-wagmi-white p-[4px] flex flex-col justify-start">
			{/* Title at the top */}
			<div className="flex flex-col items-center">
				<h2 className="text-black text-[2.3vw] font-gilmer text-center mb-[.8vw] mt-1">
					{title}
				</h2>
			</div>
			{/* Content right below */}
			<div className="flex-grow flex items-start justify-center">
				<p className="text-wagmi-blue text-[1.23vw] font-gilmer text-justify px-4">
					{content}
				</p>
			</div>
		</div>
	);
};

export default CardComponent;
