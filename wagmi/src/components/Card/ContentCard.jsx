import React from "react";

const ContentCard = ({ title, text, alt }) => {
	return (
		<div
			className={`relative md:w-[250px] md:h-[300px] w-[150px] h-[180px] rounded-[14px] overflow-hidden p-[6px] ${
				alt
					? "bg-wagmi-blue"
					: "border-wagmi-blue bg-wagmi-white border-[4px] border-solid"
			} `}
		>
			<div className="relative w-full h-full rounded-[10px] overflow-hidden flex flex-col">
				<div className="flex flex-col p-4 sm:p-2">
					<h2
						className={`${
							alt ? "text-wagmi-white" : "text-wagmi-blue"
						} text-xl font-gilmer sm:text-base`}
					>
						{title}
					</h2>
				</div>

				<div className="flex flex-col p-4 sm:p-2">
					<p
						className={`${
							alt ? "text-wagmi-white" : "text-wagmi-blue"
						} text-md font-gilmer sm:text-sm`}
					>
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
