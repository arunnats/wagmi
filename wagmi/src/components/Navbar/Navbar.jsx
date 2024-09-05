import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../.././assets/images/heroImage.jpeg";
import wagmiLogo from "../.././assets/images/wagmiLogo.svg";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
	const logoRef = useRef(null);
	const heroRef = useRef(null);

	useEffect(() => {
		gsap.set(logoRef.current, {
			y: -(window.innerHeight / 1.6),
			scale: 2.9,
		});

		gsap.to(logoRef.current, {
			y: 0,
			scale: 1,
			scrollTrigger: {
				trigger: heroRef.current,
				start: "top 5vh",
				end: "bottom top",
				scrub: true,
			},
			duration: 2,
			ease: "power1.out",
		});
	}, []);

	return (
		<>
			<div className="w-full h-screen">
				<img
					src={heroImage}
					alt="Hero Image"
					className="w-full h-full object-cover"
					ref={heroRef}
				/>
			</div>
			<div className="w-full h-[100px] flex items-center justify-between padding z-[999] px-[4em] py-0 bg-wagmi-blue">
				<div class="items-left">
					<a className="px-[1em] py-0" href="#">
						placeholder
					</a>
					<a className="px-[1em] py-0" href="#">
						placeholder
					</a>
				</div>
				<div className="flex justify-center items-center">
					<img
						className="h-20"
						src={wagmiLogo}
						alt="Wagmi Logo"
						ref={logoRef}
					/>
				</div>
				<div class="items-right">
					<a className="px-[1em] py-0" href="#">
						placeholder
					</a>
					<a className="px-[1em] py-0" href="#">
						placeholder
					</a>
				</div>
			</div>
		</>
	);
}

export default Navbar;
