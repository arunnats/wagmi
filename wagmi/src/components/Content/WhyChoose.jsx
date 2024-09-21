import React, { useState, useEffect } from "react";
import ContentCard from "../Card/ContentCard";

const WhyChoose = () => {
	const cardData = [
		{
			title: "Prime Location:",
			text: "Located in Unichira, Edapally, WAGMI offers unmatched convenience with easy access to Kochi's bustling areas like Thrikkakara, Kakkanad, and Edapally. You'll enjoy proximity to major transportation, dining, and entertainment, always staying connected to everything you need.",
		},
		{
			title: "Flexible Solutions:",
			text: "We understand that every business has unique needs. That’s why we offer a variety of flexible membership options like hot desks, dedicated desks, private cabins, and virtual offices. Our solutions are designed to grow and adapt as your business evolves, giving you room to scale easily.",
		},
		{
			title: "Modern Facilities:",
			text: "Our spaces are equipped with the latest technology and features to support your business needs. Enjoy high-speed internet, well-designed workspaces, a cozy cafeteria, and relaxing lounge areas—all tailored to keep you productive, focused, and comfortable throughout your day.",
		},
		{
			title: "Exceptional Support:",
			text: "Our dedicated team is always on hand to ensure your experience at WAGMI is seamless. From administrative help to tech support, we’re here to provide anything you need, ensuring you can focus on what truly matters: growing your business and achieving success.",
		},
	];

	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div className="text-wagmi-blue text-center font-gilmer text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl mt-[5vh] md:mt-[10vh] mb-[2vh] md:mb-[3vh]">
				<h3>Why Choose Wagmi</h3>
			</div>
			<div className="mx-auto w-[90vw] flex flex-wrap justify-center gap-[1vw]  md:flex-row">
				{cardData.map((card, index) => (
					<div key={index}>
						<ContentCard
							title={card.title}
							text={card.text}
							alt={
								isSmallScreen
									? index === 1 || index === 2
									: index === 1 || index === 3
							}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default WhyChoose;
