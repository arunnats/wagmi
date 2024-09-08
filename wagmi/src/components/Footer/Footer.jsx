import React, { useState, useEffect } from "react";
import wagmiIcon from "../../assets/images/wagmiIcon.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	// Step 1: Create a state to store whether the screen is mobile or not
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	// Step 2: Define a function to handle screen width changes
	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	// Step 3: Use useEffect to listen to window resize events
	useEffect(() => {
		// Add event listener when the component mounts
		window.addEventListener("resize", handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Step 4: Conditionally render based on screen size
	return isMobile ? (
		<div className="flex flex-col justify-between items-center h-auto md:h-[250px] bg-wagmi-blue relative mt-[16vh] px-8 py-8">
			<div className=" -translate-y-24 w-36 h-36 shadow-[0px_7px_24.5px_rgba(0,_0,_0,_0.25)] rounded-full bg-wagmi-blue flex justify-center items-center">
				<img className="w-16 h-16" src={wagmiIcon} alt="WAGMI Icon" />
			</div>
			<div className="w-full md:w-[33vw] h-auto md:h-[200px] mb-6 md:mb-0 order-2 md:order-none -translate-y-10">
				<div className="text-center flex flex-col items-center">
					<div className="mt-[2vh]">
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg">
							123 Wagmi St, Kochi, Kerala
						</p>
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg">
							Phone: +91 12345 67890
						</p>
					</div>
				</div>
			</div>

			<div className="w-full mx-auto h-[250px] mb-6 md:mb-0 order-3 md:order-none -translate-y-10">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31437.43213844723!2d76.20789489389806!3d9.960641200487823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d314f0b178d%3A0xc545233f390db43b!2sFort%20Kochi%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1725822611924!5m2!1sen!2sin"
					width="100%"
					height="100%"
					style={{ border: "0" }}
					allowFullScreen={false}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>

			<div className="w-full  flex justify-center -translate-y-12">
				<div className="flex flex-row md:flex-colitems -center text-wagmi-white font-gilmer space-x-4 ">
					{/* Facebook */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Facebook"
					>
						<FaFacebookF size={30} />
						<span>@wagmi</span>
					</a>
					{/* Twitter */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Twitter"
					>
						<FaTwitter size={30} />
						<span>@wagmi2</span>
					</a>
					{/* Instagram */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Instagram"
					>
						<FaInstagram size={30} />
						<span>@wagmi</span>
					</a>
				</div>
			</div>
		</div>
	) : (
		<div className="flex flex-col md:flex-row justify-around items-center h-auto md:h-[250px] bg-wagmi-blue relative mt-[12vh] md:mt-[14vh] lg:mt-[18vh] px-8 py-8">
			{/* Google Map on the left */}
			<div className="w-full md:w-[30vw] h-[200px]  mb-6 md:mb-0">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31437.43213844723!2d76.20789489389806!3d9.960641200487823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d314f0b178d%3A0xc545233f390db43b!2sFort%20Kochi%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1725822611924!5m2!1sen!2sin"
					width="70%"
					height="100%"
					style={{ border: "0" }}
					allowFullScreen={false}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>

			{/* Center area for icon, address, and phone number */}
			<div className="w-full md:w-[33vw] h-auto md:h-[200px] mb-6 md:mb-0">
				<div className="text-center flex flex-col items-center">
					<div className="absolute -translate-y-24 w-36 h-36 shadow-[0px_7px_24.5px_rgba(0,_0,_0,_0.25)] rounded-full bg-wagmi-blue flex justify-center items-center">
						<img className="w-16 h-16" src={wagmiIcon} alt="WAGMI Icon" />
					</div>
					<div className="mt-24">
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg">
							123 Wagmi St, Kochi, Kerala
						</p>
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg">
							Phone: +91 12345 67890
						</p>
					</div>
				</div>
			</div>

			{/* Social media icons on the right */}
			<div className="w-full md:w-[30vw] h-auto flex justify-center">
				<div className="flex flex-col items-start text-wagmi-white font-gilmer space-y-4">
					{/* Facebook */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Facebook"
					>
						<FaFacebookF size={30} />
						<span>@wagmi</span>
					</a>
					{/* Twitter */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Twitter"
					>
						<FaTwitter size={30} />
						<span>@wagmi2</span>
					</a>
					{/* Instagram */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Instagram"
					>
						<FaInstagram size={30} />
						<span>@wagmi</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
