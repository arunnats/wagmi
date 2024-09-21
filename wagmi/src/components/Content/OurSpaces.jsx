import React from "react";
import CardComponent from "../Card/Card";

const OurSpaces = () => {
	const cardData = [
		{
			title: "Hot Desk",
			content:
				"Ideal for those who enjoy flexibility, our hot desks offer a co-working environment where you can choose any desk and get to work. Perfect for freelancers and remote workers needing a productive space.",
		},
		{
			title: "Dedicated Desk",
			content:
				"For small teams or individuals needing a consistent workspace, our dedicated desks provide a reserved spot in our co-working area, with access to all the shared amenities.",
		},
		{
			title: "Private Cabin",
			content:
				"Our private cabins are designed for teams that need a dedicated space. Customize your cabin and enjoy the quiet and focus that comes with a private office.",
		},
		{
			title: "Virtual Office",
			content:
				"For businesses needing a professional presence, our virtual office services provide a business address, mail handling, and call forwarding, all without a physical office.",
		},
	];

	return (
		<>
			<div className="w-[80vw] md:w-[85vw] lg:w-[80vw] mx-auto flex flex-col md:flex-row items-center justify-center mt-[5vh] md:mt-[3vh] lg:mt-[10vh]">
				<div className="w-full md:w-[50%] flex justify-center ">
					<div className="relative w-[80vw] h-[83.3912vw] md:w-[38.3733vw] md:h-[40vw] rounded-[14px] overflow-hidden  bg-wagmi-blue p-3">
						<div className="text-wagmi-white text-center font-gilmer text-1xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl my-2">
							<h3>Our Spaces</h3>
						</div>
						<img
							src="https://via.placeholder.com/150x200" // Replace with actual image URL
							alt="Our Spaces"
							className="w-auto h-[75%] overflow-hidden object-cover rounded-[14px] mx-auto mt-[2vw]"
						/>
					</div>
				</div>

				<div className="w-[80vw] md:w-[50%] flex flex-wrap justify-center gap-[4vw] md:gap-[.6vw] mt-2 md:mt-0">
					{/* Small cards with title and content */}
					{cardData.map((card, index) => (
						<div key={index}>
							<CardComponent title={card.title} content={card.content} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default OurSpaces;
