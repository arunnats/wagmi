import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wagmiMonogram from "../.././assets/images/wagmiMonogram.svg";

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
			<div className="relative w-[90vw]  mx-auto mt-[5vh] md:mt-[3vh] lg:mt-[10vh] rounded-[14px]  bg-wagmi-blue flex flex-row transition-transform duration-300 ease-out hover:-translate-y-[10px]">
				<div className="flex flex-col p-2" ref={joinRef}>
					<div className="text-wagmi-white px-6 font-gilmer text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl my-1 md:mt-4">
						<h3>
							Join the <span className="font-gilmerbold">WAGMI</span> Community!
						</h3>
					</div>
					<div className="  text-wagmi-white text-justify font-gilmer text-sm md:text-md lg:text-lg xl:text-xl p-2 px-6">
						<h3>
							Ready to elevate your workspace experience? Contact us today to
							schedule a tour and explore how WAGMI can be the ideal fit for
							your business needs. Become part of our thriving community of
							innovators and professionals and take the next step in your
							business journey with us!
						</h3>
						<p className=" text-black font-semibold font-gilmer text-sm md:text-md lg:text-lg xl:text-xl my-1 mt-4">
							<a href="tel:+918129988389" className="hover:underline">
								Phone:
								<span className="font-gilmerbold"> +91 81299 88389</span>
							</a>
						</p>
						<p className=" text-black font-semibold font-gilmer text-sm md:text-md lg:text-lg xl:text-xl my-1">
							<a
								href="mailto:admin@wagmiworkspace.com"
								className="hover:underline"
							>
								Email:{" "}
								<span className="font-gilmerbold">
									admin@wagmiworkspace.com
								</span>
							</a>
						</p>
					</div>
				</div>
				<div className="relative hidden md:flex justify-center items-center">
					<img
						className="w-full h-auto"
						src={wagmiMonogram}
						alt="WAGMI Monogram"
					/>
				</div>
			</div>
		</>
	);
};

export default JoinUs;
