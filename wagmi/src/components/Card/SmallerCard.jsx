import React from "react";

const CardComponent = ({ title, imageUrl, index }) => {
	const renderImageDiv = (index) => {
		switch (index) {
			case 1:
				return (
					<div className="flex items-start justify-center md:justify-end">
						<img
							src={imageUrl}
							alt="Our Spaces 1"
							className="h-[16vw] md:h-[7.5vw] rounded-[14px] -translate-x-[15px] translate-y-[14px] md:-translate-x-[10px] md:translate-y-[10px]"
						/>
					</div>
				);
			case 2:
				return (
					<div className="flex items-start justify-end">
						<img
							src={imageUrl}
							alt="Our Spaces 2"
							className="h-[16vw] md:h-[8.5vw] rounded-[14px] -translate-x-[15px]  md:-translate-x-[10px]"
						/>
					</div>
				);
			case 3:
				return (
					<div className="flex items-start justify-end">
						<img
							src={imageUrl}
							alt="Our Spaces 3"
							className="h-[100%] md:h-[95%] rounded-[14px] translate-x-[13px] translate-y-[10px] md:translate-x-[20px] md:-translate-y-[10px]"
						/>
					</div>
				);
			case 4:
				return (
					<div className="flex items-start justify-end">
						<img
							src={imageUrl}
							alt="Our Spaces 4"
							className="h-[16vw] md:h-[8.5vw] rounded-[14px]  md:-translate-x-[10px]"
						/>
					</div>
				);
			case 5:
				return (
					<div className="flex items-start justify-end">
						<img
							src={imageUrl}
							alt="Our Spaces 5"
							className="h-[16vw] md:h-[9vw] rounded-[14px] translate-x-[20px] translate-y-[12px] md:-translate-x-[15px] md:-translate-y-[5px]"
						/>
					</div>
				);
			case 6:
				return (
					<div className="flex items-start justify-end">
						<img
							src={imageUrl}
							alt="Our Spaces 6"
							className="h-[16vw] md:h-[9.5vw] rounded-[14px] translate-y-[12px] md:-translate-x-[10px] md:-translate-y-[10px]"
						/>
					</div>
				);
		}
	};

	return (
		<div className="relative w-[39vw] h-[21vw] md:w-[19.18665vw] md:h-[13.6vw] rounded-[14px] overflow-hidden border-wagmi-blue border-[2px] md:border-[4px] border-solid bg-wagmi-white p-[4px] flex md:flex-col justify-start transition-transform duration-300 ease-out hover:-translate-y-[5px]">
			{/* Title at the top */}
			<div className="">
				<h2 className="text-black min-w-[50%] md:w-[100%] text-[2.2vw] md:text-[1.5vw] font-gilmer md:text-center mb-[.8vw] m-1 px-1">
					{title}
				</h2>
			</div>
			{/* Render image div based on index */}
			{renderImageDiv(index)}
		</div>
	);
};

export default CardComponent;
