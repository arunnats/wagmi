import React, { useState, useEffect } from "react";
import wagmiIcon from "../../assets/images/wagmiIcon.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ({ onMessageChange }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	const handleReset = () => {
		onMessageChange(true);
	};

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isMobile ? (
		<div className="flex flex-col justify-between items-center h-auto md:h-[250px] bg-wagmi-blue relative mt-[10vh] lg:mt-[16vh] px-8 py-8">
			<div className=" -translate-y-24 w-36 h-36 shadow-[0px_7px_24.5px_rgba(0,_0,_0,_0.25)] rounded-full bg-wagmi-blue flex justify-center items-center">
				<img className="w-16 h-16" src={wagmiIcon} alt="WAGMI Icon" />
			</div>
			<div className="w-full md:w-[33vw] h-auto md:h-[200px] mb-6 md:mb-0 order-2 md:order-none -translate-y-10">
				<div className="text-center flex flex-col items-center">
					<div className="mt-[2vh]">
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg">
							2nd Floor , AN Square, Unichira Thoppil Rd, Edappally, Kochi,
							Kerala 682021
						</p>
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg mb-1">
							<a href="tel:+918129988389" className="hover:underline">
								Phone: +91 81299 88389
							</a>
						</p>
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg mb-1">
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

			<div className="w-full mx-auto h-[250px] mb-6 md:mb-0 order-3 md:order-none -translate-y-10">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125723.03798811416!2d76.18794436249999!3d10.029651800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080db04c123b35%3A0xe19a01b52d0d578b!2sAN%20Square!5e0!3m2!1sen!2sin!4v1726514530596!5m2!1sen!2sin"
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
						<span>@wagmiworkspace</span>
					</a>
					{/* Twitter */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Twitter"
					>
						<FaTwitter size={30} />
						<span>@wagmiworkspace</span>
					</a>
					{/* Instagram */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Instagram"
					>
						<FaInstagram size={30} />
						<span>@wagmiworkspace</span>
					</a>
				</div>
			</div>
		</div>
	) : (
		<div className="flex flex-col md:flex-row justify-around items-center h-auto md:h-[250px] bg-wagmi-blue relative mt-[12vh] md:mt-[10vh] lg:mt-[18vh] px-8 py-8">
			{/* Google Map on the left */}
			<div className="w-full md:w-[30vw] h-[200px]  mb-6 md:mb-0">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125723.03798811416!2d76.18794436249999!3d10.029651800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080db04c123b35%3A0xe19a01b52d0d578b!2sAN%20Square!5e0!3m2!1sen!2sin!4v1726514530596!5m2!1sen!2sin"
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
					<div className="mt-16">
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg mb-1">
							2nd Floor , AN Square, Unichira Thoppil Rd, Edappally, Kochi,
							Kerala 682021
						</p>
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg mb-1">
							<a href="tel:+918129988389" className="hover:underline">
								Phone: +91 81299 88389
							</a>
						</p>
						<p className="text-wagmi-white font-semibold font-gilmer text-sm sm:text-base lg:text-lg mb-1">
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
						<span>@wagmiworkspace</span>
					</a>
					{/* Twitter */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Twitter"
					>
						<FaTwitter size={30} />
						<span>@wagmiworkspace</span>
					</a>
					{/* Instagram */}
					<a
						href="#"
						className="flex items-center space-x-2"
						aria-label="Instagram"
					>
						<FaInstagram size={30} />
						<span>@wagmiworkspace</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
