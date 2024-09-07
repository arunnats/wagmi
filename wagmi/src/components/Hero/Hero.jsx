import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLong from "../ButtonLong/ButtonLong";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const textRef1 = useRef(null);
	const textRef2 = useRef(null);

	useEffect(() => {
		const myText1 = new SplitType(textRef1.current, { types: "chars" });
		const myText2 = new SplitType(textRef2.current, { types: "chars" });

		gsap.fromTo(
			textRef1.current.querySelectorAll(".char"),
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.05,
				duration: 0.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: textRef1.current,
					start: "top 80%",
					end: "bottom top",
					toggleActions: "play none none none",
				},
			}
		);

		gsap.fromTo(
			textRef2.current.querySelectorAll(".char"),
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.05,
				duration: 0.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: textRef1.current,
					start: "top 80%",
					end: "bottom top",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<div className="w-full h-screen bg-wagmi-white flex flex-col items-center">
			<div className="text-wagmi-blue text-center font-gilmer text-9xl mt-[12vh] mb-[14vh]">
				<h3 ref={textRef1}>We are all</h3>
				<h3 ref={textRef2}>gonna make it.</h3>
			</div>
			<ButtonLong text="Explore our workspace" href="#" />
		</div>
	);
};

export default Hero;
