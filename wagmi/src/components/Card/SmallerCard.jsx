import React from "react";

const CardComponent = ({ title, imageUrl }) => {
	return (
		<div className="relative w-[39vw] h-[21vw] md:w-[19.18665vw] md:h-[13.6vw] rounded-[14px] overflow-hidden border-wagmi-blue border-[2px] md:border-[4px] border-solid bg-wagmi-white p-[4px] flex flex-col justify-start transition-transform duration-300 ease-out hover:-translate-y-[5px]">
			{/* Title at the top */}
			<div className="flex ">
				<h2 className="text-black text-[1vw] font-gilmer text-center mb-[.8vw] mt-1">
					{title}
				</h2>
			</div>
			{/* Content right below */}
			<div className="flex-grow flex items-start justify-center">
				<img
					src={imageUrl}
					alt="Our Spaces"
					className="w-auto h-[70%]  object-cover rounded-[14px] mx-auto "
				/>
			</div>
		</div>
	);
};

export default CardComponent;
