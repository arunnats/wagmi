import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ContentCards from "./components/ContentCards/ContentCards.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className="bg-wagmi-white">
			<Navbar />
			<Hero />
			<ContentCards />
		</div>
	</StrictMode>
);
