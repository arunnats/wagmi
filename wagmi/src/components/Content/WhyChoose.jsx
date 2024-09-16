import React from "react";
import ContentCard from "../Card/ContentCard";

const WhyChoose = () => {
	const cardData = [
		{
			title: "Prime Location:",
			text: "Located in Unichira, Edapally, WAGMI offers unparalleled convenience with easy access to Kochi's well-connected and thriving areas like Thrikkakara, Kakkanad, and Edapally. Benefit from proximity to major transportation links and a diverse range of dining and entertainment options. Our central location ensures you're always connected and within reach of everything you need.",
		},
		{
			title: "Flexible Solutions:",
			text: "We understand that every business has unique needs. That’s why we offer a range of flexible membership options, including hot desks, dedicated desks, private cabins, and virtual offices. Our plans are designed to adapt as your business evolves.",
		},
		{
			title: "Modern Facilities:",
			text: "Our spaces are equipped with the latest technology and amenities to support your business needs. Enjoy high-speed internet, state-of-the-art workspaces ,cafeteria  and comfortable lounge areas—all designed to keep you productive and focused.",
		},
		{
			title: "Exceptional Support:",
			text: "Our dedicated team is always on hand to provide support and ensure your experience at WAGMI is seamless. From administrative assistance to technical support, we’re here to help you focus on what you do best.",
		},
	];

	return (
		<>
			<div className="text-wagmi-blue text-center font-gilmer text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl lg:mt-[5vh] lg:mb-[8vh] md:mt-[3vh] md:mb-[7vh] mt-[3vh] mb-[7vh]">
				<h3>Why Choose Wagmi</h3>
			</div>
			<div className="mx-auto w-[90vw] flex flex-wrap justify-center gap-[1vw] sm:flex-col md:flex-row">
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
