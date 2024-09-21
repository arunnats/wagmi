import React from "react";

const CardComponent = ({ title, content }) => {
	return (
		<div className="relative w-[38vw] h-[39.6108vw] md:w-[19.18665vw] md:h-[19.8vw] rounded-[14px] overflow-hidden border-wagmi-blue border-[4px] border-solid bg-wagmi-white p-[0.3vw] flex flex-col justify-start">
			{/* Title at the top */}
			<div className="flex flex-col items-center">
				<h2 className="text-black text-[4vw] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.6rem] font-gilmer text-center mt-1">
					{title}
				</h2>
			</div>
			{/* Content right below */}
			<div className="flex-grow flex items-start justify-center">
				<p className="text-wagmi-blue text-[2.45vw] md:text-[1.2vw] lg:text-[1.2svw] xl:text-[1.3vw] 2xl:text-[1.45vw] tracking-tighter font-gilmer text-justify px-[2vw] md:px-[1vw]">
					{content}
				</p>
			</div>
		</div>
	);
};

export default CardComponent;
