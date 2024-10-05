import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmallerCard from "../Card/SmallerCard";
import amenitiesSpaces from "../.././assets/images/amenitiesSpaces2.svg";
import amenitiesParking from "../.././assets/images/amenitiesParking.svg";
import amenitiesPower from "../.././assets/images/amenitiesPower.svg";
import amenitiesPrinter from "../.././assets/images/amenitiesPrinter.svg";
import amenitiesRefreshments from "../.././assets/images/amenitiesRefreshments.svg";
import amenitiesSecurity from "../.././assets/images/amenitiesSecurity.svg";
import amenitiesWifi from "../.././assets/images/amenitiesWifi.svg";

gsap.registerPlugin(ScrollTrigger);

const Amenities = () => {
	const cardRefs = useRef([]);

	const cardData = [
		{
			imageUrl: amenitiesWifi,
			title: "High Speed Internet",
		},
		{
			imageUrl: amenitiesPrinter,
			title: "Printing Services",
		},
		{
			imageUrl: amenitiesPower,
			title: "Power Backup",
		},
		{
			imageUrl: amenitiesParking,
			title: "Secure Parking",
		},
		{
			imageUrl: amenitiesRefreshments,
			title: "Refreshments",
		},
		{
			imageUrl: amenitiesSecurity,
			title: "Security Facilities",
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
					start: "top 80%",
					end: "bottom 50%",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<div className="mb-[2vh] md:mb-[0vh] lg:mb-[7vh]">
			<div className="w-[80vw] md:w-[85vw] lg:w-[80vw] mx-auto flex flex-col md:flex-row items-center justify-between mt-[2vh] md:mt-[0vh] lg:mt-[7vh]">
				<div
					className="relative w-[80vw] h-[83.3912vw] md:w-[36vw] md:h-[42vw] rounded-[14px] border-solid bg-wagmi-blue p-3 "
					ref={(el) => (cardRefs.current[0] = el)}
				>
					<div className="text-wagmi-white text-center font-gilmerbold text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl my-2 ">
						<h3>Amenities</h3>
					</div>

					<img
						src={amenitiesSpaces}
						alt="Amenities"
						className="w-auto h-[75%]  object-cover rounded-[14px] mx-auto mt-[13vw] md:mt-[7vw] translate-x-[70px] transition-transform duration-300 ease-out hover:-translate-y-[10px]"
					/>
				</div>

				<div className="w-[80vw] md:w-[50%] flex flex-wrap justify-center gap-[2vw] md:gap-[.52vw] mt-2 md:mt-0">
					{cardData.map((card, index) => (
						<div key={index} ref={(el) => (cardRefs.current[index + 1] = el)}>
							<SmallerCard
								title={card.title}
								imageUrl={card.imageUrl}
								index={index + 1}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Amenities;
