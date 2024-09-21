import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
		<div className="w-full  bg-wagmi-white flex flex-col items-center lg:mb-[5vh] md:mb-[3vh] mb-[2vh]">
			<div className="text-wagmi-blue text-center font-gilmer  lg:mt-[13vh] lg:mb-[5vh] md:mt-[7vh] md:mb-[3vh] mt-[6vh] mb-[2vh]">
				<h3
					className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-[8rem]"
					ref={textRef1}
				>
					We're All
				</h3>
				<h3
					className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-[8rem]"
					ref={textRef2}
				>
					Gonna Make It.
				</h3>
				<h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl px-2 mt-[2vh] md:mt-[6vh]">
					At Wagmi, we believe that collaboration
				</h3>
				<h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl px-4">
					and community are the cornerstones of success.
				</h3>
			</div>
		</div>
	);
};

export default Hero;
