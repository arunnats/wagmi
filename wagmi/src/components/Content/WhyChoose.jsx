import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContentCard from "../Card/ContentCard";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
	const cardRefs = useRef([]);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

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

	// Effect for animations
	useEffect(() => {
		const elementPositionY =
			cardRefs.current[0].getBoundingClientRect().top + window.scrollY;

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

		// Animate the smaller cards
		gsap.fromTo(
			cardRefs.current.slice(1, cardData.length + 1), // Correct slice for cards
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.15, // Apply stagger
				duration: 0.6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: cardRefs.current[0], // Trigger animation when the heading is in view
					start: "top 70%",
					end: "bottom 50%",
					toggleActions: "play none none none",
				},
			}
		);
	}, [cardData.length]);

	// Effect for screen size responsiveness
	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		// Set initial screen size
		handleResize();
		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{/* Heading Section */}
			<div
				ref={(el) => (cardRefs.current[0] = el)}
				className="text-wagmi-blue text-center font-gilmer text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl mt-[5vh] md:mt-[3vh] lg:mt-[10vh] mb-[2vh] md:mb-[1.5vh] lg:mb-[3vh]"
			>
				<h3>Why Choose Wagmi</h3>
			</div>

			{/* Cards Section */}
			<div className="mx-auto w-[90vw] flex flex-wrap justify-center gap-[1vw] md:flex-row">
				{cardData.map((card, index) => (
					<div key={index} ref={(el) => (cardRefs.current[index + 1] = el)}>
						<ContentCard
							title={card.title}
							text={card.text}
							alt={
								isSmallScreen
									? index === 1 || index === 2 // On small screens, use alternative layout for 2nd and 3rd cards
									: index === 1 || index === 3 // On large screens, use alternative layout for 2nd and 4th cards
							}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default WhyChoose;
