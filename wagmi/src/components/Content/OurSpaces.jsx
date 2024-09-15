import React from "react";
import CardComponent from "../Card/Card";
const OurSpaces = () => {
	const cardData = [
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Hot Desk",
			text: "Description 1",
		},
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Dedicated desk",
			text: "Description 2",
		},
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Private Cabin",
			text: "Description 3",
		},
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Virtual Office",
			text: "Description 4",
		},
	];

	return (
		<>
			<div className="text-wagmi-blue text-center font-gilmer text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl lg:mt-[5vh] lg:mb-[8vh] md:mt-[3vh] md:mb-[7vh] mt-[3vh] mb-[7vh]">
				<h3>Amenities</h3>
			</div>
			<div className="flex flex-wrap justify-center gap-6 sm:flex-col md:flex-row">
				{cardData.map((card, index) => (
					<div key={index}>
						<CardComponent
							imageUrl={card.imageUrl}
							title={card.title}
							text={card.text}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default OurSpaces;
