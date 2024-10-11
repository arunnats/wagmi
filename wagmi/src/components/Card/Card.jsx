import React from "react";
import wagmiSpaces from "../.././assets/images/wagmiSpaces.svg";

const CardComponent = ({ title, content }) => {
	return (
		<div className="relative w-[38vw] h-[39.6108vw] md:w-[19.18665vw] md:h-[20.7vw] rounded-[14px] overflow-hidden bg-wagmi-blue p-[.3vw] flex flex-col justify-start transition-transform duration-300 ease-out hover:-translate-y-[5px]">
			{/* Title Section */}
			<div className="flex flex-col items-center">
				<h2 className="text-wagmi-white text-[3.6vw] md:text-[1.1rem] lg:text-[1.5rem] xl:text-[1.9rem] font-gilmerbold text-center mt-3 md:mt-2">
					{title}
				</h2>
			</div>

			{/* Content Section */}
			<div className="flex-grow flex items-start justify-center w-[95%]">
				<p className="text-black text-[2.8vw] md:text-[1.55vw] lg:text-[1.55vw] xl:text-[1.5vw] 2xl:text-[1.5vw] tracking-tighter font-gilmer text-wrap px-[2vw] md:px-[.6vw] 2xl:px-[2vw]">
					{content}
				</p>
			</div>

			{/* Image Section - Positioned at the Bottom Right
			<div className="absolute bottom-0 right-0 w-auto h-[50%]">
				<img
					src={wagmiSpaces}
					alt="Our Spaces"
					className="w-auto h-[100%] object-cover"
				/>
			</div> */}
		</div>
	);
};

export default CardComponent;
