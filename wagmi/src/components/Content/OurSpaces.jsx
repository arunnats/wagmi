import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardComponent from "../Card/Card";
import Carousel from "../Content/Carousel";
import wagmiSpaces from "../.././assets/images/wagmiSpaces.svg";

gsap.registerPlugin(ScrollTrigger);

const OurSpaces = () => {
	const cardRefs = useRef([]);

	const cardData = [
		{
			title: "Hot Desk",
			content:
				"Flexible co-working desks for creators who need a productive space without assigned seating.",
		},
		{
			title: "Dedicated Desk",
			content:
				"Reserved desks for small teams or individuals, with access to shared co-working amenities.",
		},
		{
			title: "Private Cabin",
			content:
				"Private cabins for teams needing dedicated workspace, with customization and focus in a quiet environment.",
		},
		{
			title: "Virtual Office",
			content:
				"Professional business address with mail handling and call forwarding, without the need for a physical office.",
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
		<div className="bg-wagmi-offwhite">
			<div className="w-[80vw] md:w-[85vw] lg:w-[80vw] mx-auto flex flex-col md:flex-row items-center justify-between">
				{/* Big card */}
				<div
					className="relative w-[80vw] h-[83.3912vw] md:w-[36vw] md:h-[42vw] rounded-[14px]  border-wagmi-blue border-[4px] border-solid bg-wagmi-white p-3"
					ref={(el) => (cardRefs.current[0] = el)} // Set big card as cardRefs[0]
				>
					<div className="text-wagmi-blue text-center font-gilmerbold text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl my-2">
						<h3>Our Spaces</h3>
					</div>
					<img
						src={wagmiSpaces} // Replace with actual image URL
						alt="Our Spaces"
						className="w-auto h-[75%]  object-cover rounded-[14px] mx-auto mt-[13vw] md:mt-[7vw] translate-x-[50px] transition-transform duration-300 ease-out hover:-translate-y-[10px]"
					/>
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
			<div>
				<Carousel />
			</div>
		</div>
	);
};

export default OurSpaces;
