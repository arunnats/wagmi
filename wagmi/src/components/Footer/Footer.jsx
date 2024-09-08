import React from "react";
import wagmiIcon from "../../assets/images/wagmiIcon.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="flex flex-col md:flex-row justify-around items-center h-auto md:h-[250px] bg-wagmi-blue relative mt-[12vh] md:mt-[14vh] lg:mt-[18vh] px-8 py-8">
			{/* Google Map on the left */}
			<div className="w-full md:w-[30vw] h-[200px] md:h-[30vh] mb-6 md:mb-0">
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
			<div className="w-full md:w-[30vw] h-auto md:h-[30vh] flex justify-center">
				<div className="flex flex-col md:flex-row items-center text-wagmi-white font-gilmer space-y-4 md:space-y-0 md:space-x-8">
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
