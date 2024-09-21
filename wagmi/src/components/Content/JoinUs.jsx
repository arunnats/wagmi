import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JoinUs = () => {
	const joinRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			joinRef.current,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: joinRef.current,
					start: "top 80%",
					end: "bottom 50%",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<>
			<div className="w-[90vw]  mx-auto mt-[5vh] md:mt-[3vh] lg:mt-[10vh]">
				<div
					className="flex flex-col  rounded-[14px] overflow-hidden border-wagmi-blue border-[2px] md:border-[4px] border-solid bg-wagmi-white p-2"
					ref={joinRef}
				>
					<div className="text-wagmi-blue text-center font-gilmer text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl my-1 md:my-4">
						<h3>Join the WAGMI Community!</h3>
					</div>
					<div className="mx-auto w-[90%] md:w-[70%] text-wagmi-blue text-justify font-gilmer text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl p-2 md:p-4">
						<h3>
							Ready to elevate your workspace experience? Contact us today to
							schedule a tour and explore how WAGMI can be the ideal fit for
							your business needs. Become part of our thriving community of
							innovators and professionals and take the next step in your
							business journey with us.
						</h3>
						<p className=" text-black font-semibold font-gilmer text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl my-1 mt-4">
							<a href="tel:+918129988389" className="hover:underline">
								Phone: +91 81299 88389
							</a>
						</p>
						<p className=" text-black font-semibold font-gilmer text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl my-1">
							<a
								href="mailto:admin@wagmiworkspace.com"
								className="hover:underline"
							>
								Email: admin@wagmiworkspace.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default JoinUs;
