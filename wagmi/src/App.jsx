import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ContentCards from "./components/ContentCards/ContentCards.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OurSpaces from "./components/Content/OurSpaces.jsx";
import Amenities from "./components/Content/Amenities.jsx";
import WhyChoose from "./components/Content/WhyChoose.jsx";
import JoinUs from "./components/Content/JoinUs.jsx";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "./index.css";

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
	const [click, setClick] = useState(false);
	const ourSpacesRef = useRef(null);
	const amenitiesRef = useRef(null);
	const whyChooseRef = useRef(null);
	const joinUsRef = useRef(null);

	const handleMessageChange = (newState) => {
		setClick(newState);
	};

	useEffect(() => {
		if (click) {
			setClick(false);
		}
	}, [click]);

	return (
		<div className="bg-wagmi-white">
			<Navbar />
			<Hero />
			<ContentCards
				reset={click}
				scrollToSection={{
					ourSpacesRef,
					amenitiesRef,
					whyChooseRef,
					joinUsRef,
				}}
			/>
			<div ref={ourSpacesRef}>
				<OurSpaces />
			</div>
			<div ref={amenitiesRef}>
				<Amenities />
			</div>
			<div ref={whyChooseRef}>
				<WhyChoose />
			</div>
			<div ref={joinUsRef}>
				<JoinUs />
			</div>
			<Footer onMessageChange={handleMessageChange} />
		</div>
	);
};

export default App;
