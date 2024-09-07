import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../.././assets/images/heroImage.jpeg";
import wagmiLogo from "../.././assets/images/wagmiLogo.svg";
import hamburger from "../.././assets/images/hamburger.svg";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
	const logoRef = useRef(null);
	const heroRef = useRef(null);

	const setLogoAnimation = () => {
		const isMobile = window.innerWidth <= 768;
		const scaleValue = isMobile ? 1.5 : 2;

		gsap.set(logoRef.current, {
			y: -(window.innerHeight / 1.6),
			scale: scaleValue,
		});

		gsap.to(logoRef.current, {
			y: 0,
			scale: 1,
			scrollTrigger: {
				trigger: heroRef.current,
				start: "top 5vh",
				end: "bottom 95vh",
				scrub: true,
			},
			ease: "power1.inOut",
		});
	};

	useEffect(() => {
		setLogoAnimation();

		const handleResize = () => {
			ScrollTrigger.refresh(); // Refresh ScrollTrigger to update start/end positions
			setLogoAnimation();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div className="w-full h-screen z-[998]">
				<img
					src={heroImage}
					alt="Hero Image"
					className="w-full h-full object-cover"
					ref={heroRef}
				/>
			</div>

			<div className="w-full h-[90px] flex items-center z-[10] px-[2em] py-0 bg-wagmi-blue">
				<div className="absolute z-[12]">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost ">
							<img src={hamburger} alt="Menu" className="w-6 h-6" />
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-wagmi-white border-wagmi-blue border-2 rounded-[14px] z-[13] mt-6 w-52 p-1 text-black font-gilmer"
						>
							<li>
								<a>Item 1</a>
							</li>
							<li>
								<a>Item 2</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-grow justify-center relative">
					<img
						className="h-20 mx-auto"
						src={wagmiLogo}
						alt="Wagmi Logo"
						ref={logoRef}
					/>
				</div>
			</div>
		</>
	);
}

export default Navbar;
