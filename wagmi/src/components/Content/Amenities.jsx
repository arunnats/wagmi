import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmallerCard from "../Card/SmallerCard";

gsap.registerPlugin(ScrollTrigger);

const Amenities = () => {
	const cardRefs = useRef([]);

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

	useEffect(() => {
		// Animating the big card first (cardRefs.current[0])
		gsap.fromTo(
			cardRefs.current[0],
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,

				duration: 0.6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: cardRefs.current[0],
					start: "top 70%",
					end: "bottom 50%",
					toggleActions: "play none none none",
				},
			}
		);

		// Animating the smaller cards (cardRefs.current[1] to cardRefs.current[4])
		gsap.fromTo(
			cardRefs.current.slice(1, 9),
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				delay: 0.3,
				stagger: 0.15,
				duration: 0.6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: cardRefs.current[0],
					start: "top 70%",
					end: "bottom 50%",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<>
			<div className="w-[80vw] md:w-[85vw] lg:w-[80vw] mx-auto flex flex-col md:flex-row items-center justify-center mt-[5vh] md:mt-[3vh] lg:mt-[10vh]">
				<div className="w-full md:w-[50%] flex justify-center ">
					<div
						className="relative w-[80vw] h-[83.3912vw] md:w-[38.3733vw] md:h-[40vw] rounded-[14px] overflow-hidden border-solid bg-wagmi-blue p-3"
						ref={(el) => (cardRefs.current[0] = el)}
					>
						<div className="text-wagmi-white text-center font-gilmer text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl my-2">
							<h3>Amenities</h3>
						</div>
						<img
							src="https://via.placeholder.com/150x200"
							alt="Amenities"
							className="w-auto h-[75%] overflow-hidden object-cover rounded-[14px] mx-auto mt-[2vw]"
						/>
					</div>
				</div>

				<div className="w-[80vw] md:w-[50%] flex flex-wrap justify-center gap-[2vw] md:gap-[.52vw] mt-2 md:mt-0">
					{cardData.map((card, index) => (
						<div key={index} ref={(el) => (cardRefs.current[index + 1] = el)}>
							<SmallerCard title={card.title} content={card.content} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Amenities;
