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
		<div className="w-full  bg-wagmi-white flex flex-col items-center lg:mb-[10vh] md:mb-[8vh] mb-[7vh]">
			<div className="text-wagmi-blue text-center font-gilmer text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-[10rem] lg:mt-[13vh] lg:mb-[13vh] md:mt-[7vh] md:mb-[9vh] mt-[6vh] mb-[8vh]">
				<h3 ref={textRef1}>We're All</h3>
				<h3 ref={textRef2}>Gonna Make It.</h3>
				<h3 className="text-md sm:text-l md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl px-10 mt-[6vh]">
					At Wagmi, we believe that collaboration and community
				</h3>
				<h3 className="text-md sm:text-l md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl px-10">
					are the cornerstones of success.
				</h3>
			</div>
			<ButtonLong text="Explore our workspace" href="#" />
		</div>
	);
};

export default Hero;
