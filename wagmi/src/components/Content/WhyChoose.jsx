import React from "react";
import ContentCard from "../Card/ContentCard";

const WhyChoose = () => {
	const cardData = [
		{
			title: "Prime Location",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
		},
		{
			title: "Flexible Solutions",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
		},
		{
			title: "State of Art Amenities",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere.",
		},
		{
			title: "Exceptional Support",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.",
		},
	];

	return (
		<>
			<div className="text-wagmi-blue text-center font-gilmer text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl lg:mt-[5vh] lg:mb-[8vh] md:mt-[3vh] md:mb-[7vh] mt-[3vh] mb-[7vh]">
				<h3>Why Choose Wagmi</h3>
			</div>
			<div className="flex flex-wrap justify-center gap-6 sm:flex-col md:flex-row">
				{cardData.map((card, index) => (
					<div key={index}>
						<ContentCard
							title={card.title}
							text={card.text}
							alt={index === 1 || index === 3}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default WhyChoose;
