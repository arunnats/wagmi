import React from "react";

const CardComponent = ({ imageUrl, title, text }) => {
	return (
		<div className="relative md:w-[250px] md:h-[350px] w-[125px] h-[175px] rounded-[14px] overflow-hidden border-wagmi-blue border-[4px] border-solid bg-wagmi-white p-[6px]">
			<div className="relative w-full h-full rounded-[10px] overflow-hidden">
				<img
					src={imageUrl}
					alt="Card Image"
					className="w-full h-full object-cover rounded-[10px]"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 sm:p-1 rounded-[10px]">
					<h2 className="text-white text-lg font-gilmer sm:text-sm">{title}</h2>
					<p className="text-white text-sm font-gilmer sm:text-xs">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
