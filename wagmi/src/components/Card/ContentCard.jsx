import React from "react";

const ContentCard = ({ title, text, alt }) => {
	return (
		<div
			className={`relative w-[42vw] h-[58vw] md:w-[21.6vw] md:h-[33vw] rounded-[14px] overflow-hidden p-[0.3vw] transition-transform duration-300 ease-out hover:-translate-y-[10px] ${
				alt
					? "bg-wagmi-blue"
					: "border-wagmi-blue bg-wagmi-white border-[2px] md:border-[4px] border-solid"
			}`}
		>
			<div className="relative w-full h-full rounded-[10px] overflow-hidden flex flex-col">
				<div className="flex flex-col p-[1.8vw] md:p-[1.2vw]  ">
					<h2
						className={`${
							alt ? "text-wagmi-white" : "text-wagmi-blue"
						} text-[2.4rem] md:text-[1.6rem] lg:text-[2.1rem] xl:text-[2.2rem] font-gilmerbold text-base leading-8`}
					>
						{title}
					</h2>
				</div>

				<div className="flex flex-col px-[2vw] md:px-[1.5vw] ">
					<p
						className={`${
							alt ? "text-wagmi-white" : "text-wagmi-blue"
						} text-[2.45vw] md:text-[1.2vw] lg:text-[vw] xl:text-[1.3vw] 2xl:text-[1.3vw] font-gilmer text-justify`}
					>
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
