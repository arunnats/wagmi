import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Navbar />
		<Hero />
	</StrictMode>
);
