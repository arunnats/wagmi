import React from "react";
import CardComponent from "../Card/Card";

const Amenities = () => {
	const cardData = [
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "High Speed Internet",
			text: "Description 1",
		},
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Printing Services",
			text: "Description 2",
		},
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Power Backup",
			text: "Description 3",
		},
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Secure Parking",
			text: "Description 4",
		},
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Refreshments",
			text: "Description 5",
		},
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Security Facilities",
			text: "Description 6",
		},
	];

	return (
		<>
			<div className="text-wagmi-blue text-center font-gilmer text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl lg:mt-[5vh] lg:mb-[8vh] md:mt-[3vh] md:mb-[7vh] mt-[3vh] mb-[7vh]">
				<h3>Our Spaces</h3>
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

export default Amenities;
