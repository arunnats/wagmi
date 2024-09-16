import React from "react";
import SmallerCard from "../Card/SmallerCard";

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
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Security Facilities",
			text: "Description 6",
		},
		{
			imageUrl: "https://via.placeholder.com/150x200",
			title: "Security Facilities",
			text: "Description 6",
		},
	];

	return (
		<>
			<div className="w-[90vw] mx-auto flex flex-col md:flex-row items-center justify-center">
				<div className="w-full md:w-[50%] flex justify-center ">
					<div className="relative w-[80vw] h-[83.3912vw] md:w-[43.17vw] md:h-[45vw] rounded-[14px] overflow-hidden border-solid bg-wagmi-blue p-3">
						<div className="text-wagmi-white text-center font-gilmer text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl my-4">
							<h3>Amenities</h3>
						</div>
						<img
							src="https://via.placeholder.com/150x200" // Replace with actual image URL
							alt="Our Spaces"
							className="w-auto h-[75%] overflow-hidden object-cover rounded-[14px] mx-auto mt-[2vw]"
						/>
					</div>
				</div>

				<div className="w-[80vw] md:w-[50%] flex flex-wrap justify-center gap-[2vw] md:gap-[.4vw] mt-4 md:mt-0">
					{/* Small cards with title and content */}
					{cardData.map((card, index) => (
						<div key={index}>
							<SmallerCard title={card.title} content={card.content} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Amenities;
