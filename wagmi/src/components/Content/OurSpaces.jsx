import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardComponent from "../Card/Card";

gsap.registerPlugin(ScrollTrigger);

const OurSpaces = () => {
	const cardRefs = useRef([]);

	const cardData = [
		{
			title: "Hot Desk",
			content:
				"Ideal for those who enjoy flexibility, our hot desks offer a co-working environment where you can choose any desk and get to work. Perfect for freelancers and remote workers needing a productive space.",
		},
		{
			title: "Dedicated Desk",
			content:
				"For small teams or individuals needing a consistent workspace, our dedicated desks provide a reserved spot in our co-working area, with access to all the shared amenities.",
		},
		{
			title: "Private Cabin",
			content:
				"Our private cabins are designed for teams that need a dedicated space. Customize your cabin and enjoy the quiet and focus that comes with a private office.",
		},
		{
			title: "Virtual Office",
			content:
				"For businesses needing a professional presence, our virtual office services provide a business address, mail handling, and call forwarding, all without a physical office.",
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
					start: "top 80%",
					end: "bottom 50%",
					toggleActions: "play none none none",
				},
			}
		);

		// Animating the smaller cards (cardRefs.current[1] to cardRefs.current[4])
		gsap.fromTo(
			cardRefs.current.slice(1, 5),
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				delay: 0.3,
				stagger: 0.2,
				duration: 0.6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: cardRefs.current[0],
					start: "top 80%",
					end: "bottom 50%",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<>
			<div className="w-[80vw] md:w-[85vw] lg:w-[80vw] mx-auto flex flex-col md:flex-row items-center justify-center mt-[5vh] md:mt-[3vh] lg:mt-[10vh]">
				{/* Big card */}
				<div className="w-full md:w-[50%] flex justify-center ">
					<div
						className="relative w-[80vw] h-[83.3912vw] md:w-[38.3733vw] md:h-[40vw] rounded-[14px] overflow-hidden bg-wagmi-blue p-3"
						ref={(el) => (cardRefs.current[0] = el)} // Set big card as cardRefs[0]
					>
						<div className="text-wagmi-white text-center font-gilmer text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl my-2">
							<h3>Our Spaces</h3>
						</div>
						<img
							src="https://via.placeholder.com/150x200" // Replace with actual image URL
							alt="Our Spaces"
							className="w-auto h-[75%] overflow-hidden object-cover rounded-[14px] mx-auto mt-[2vw] transition-transform duration-300 ease-out hover:-translate-y-[10px]"
						/>
					</div>
				</div>

				{/* Smaller cards */}
				<div className="w-[80vw] md:w-[50%] flex flex-wrap justify-center gap-[4vw] md:gap-[.6vw] mt-2 md:mt-0">
					{cardData.map((card, index) => (
						<div key={index} ref={(el) => (cardRefs.current[index + 1] = el)}>
							<CardComponent title={card.title} content={card.content} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default OurSpaces;
