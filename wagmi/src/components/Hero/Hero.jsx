import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const textRef1 = useRef(null);
	const textRef2 = useRef(null);
	const textRef3 = useRef(null);

	useEffect(() => {
		// Split the text into characters for animation
		const myText1 = new SplitType(textRef1.current, { types: "chars" });
		const myText2 = new SplitType(textRef2.current, { types: "chars" });
		const myText3 = new SplitType(textRef3.current, { types: "words" }); // Split textRef3 as well

		// Animate textRef1
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
					start: "top 70%",
					end: "bottom top",
					toggleActions: "play none none none",
				},
			}
		);

		// Animate textRef2
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
					trigger: textRef1.current, // Keep the trigger tied to textRef1
					start: "top 70%",
					end: "bottom top",
					toggleActions: "play none none none",
				},
			}
		);

		// Animate textRef3
		gsap.fromTo(
			textRef3.current.querySelectorAll(".word"),
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.1,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: textRef1.current, // Keep the trigger tied to textRef1 for consistency
					start: "top 70%",
					end: "bottom top",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<div className="w-full  bg-wagmi-white flex flex-col items-center lg:mb-[5vh] md:mb-[3vh] mb-[2vh]">
			<div className="text-wagmi-blue text-center font-gilmer  lg:mt-[13vh] lg:mb-[5vh] md:mt-[5vh] md:mb-[1vh] mt-[6vh] mb-[2vh]">
				<h3
					className="font-gilmerbold text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-[7rem]"
					ref={textRef1}
				>
					We're All
				</h3>
				<h3
					className="font-gilmerbold text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-[7rem]"
					ref={textRef2}
				>
					Gonna Make It.
				</h3>
				<div ref={textRef3}>
					<h3 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl px-2 mt-[1.5vh] lg:mt-[5vh]">
						At Wagmi, we believe that collaboration
					</h3>
					<h3 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl px-4">
						and community are the cornerstones of success.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Hero;
