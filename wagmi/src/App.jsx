import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ContentCards from "./components/ContentCards/ContentCards.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OurSpaces from "./components/Content/OurSpaces.jsx";
import Amenities from "./components/Content/Amenities.jsx";

import "./index.css";

const App = () => {
	const [click, setClick] = useState(false);

	const handleMessageChange = (newState) => {
		setClick(newState);
	};

	useEffect(() => {
		if (click) {
			// console.log(click);
			setClick(false);
		}
	}, [click]);

	return (
		<div className="bg-wagmi-white">
			<Navbar />
			<Hero />
			<ContentCards reset={click} />
			<OurSpaces />
			<Amenities />
			<Footer onMessageChange={handleMessageChange} />
		</div>
	);
};

export default App;
