import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLong from "../ButtonLong/ButtonLong";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	return (
		<div className="w-full h-screen bg-white flex flex-col items-center">
			<div className="text-wagmi-blue text-center font-gilmer text-8xl py-[16vh]">
				<h3>We are all</h3>
				<h3>gonna make it.</h3>
			</div>
			<ButtonLong text="Explore our workspace" href="#" />
		</div>
	);
};

export default Hero;
