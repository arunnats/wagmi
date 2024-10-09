import React from "react";
import one from "../../assets/images/OurSpaces/1.jpg";
import two from "../../assets/images/OurSpaces/2.jpg";
import three from "../../assets/images/OurSpaces/3.jpg";
import four from "../../assets/images/OurSpaces/4.jpg";
import five from "../../assets/images/OurSpaces/5.jpg";
import six from "../../assets/images/OurSpaces/6.jpg";

const Carousel = () => {
	return (
		<div className="flex justify-center mt-8 w-[80vw] mx-auto bg-wagmi-offwhite">
			{/* Centering the carousel and adding margin */}
			<div className="carousel carousel-center rounded-box px-3 md:px-6 p-4 md:p-6 border-wagmi-blue bg-wagmi-white border-[2px] md:border-[4px] border-solid shadow-lg">
				{/* Added padding (px-6) for left and right */}
				<div className="carousel-item pl-2">
					<img
						src={four}
						alt="Image 1"
						className="w-auto h-[300px] md:h-[400px] object-cover rounded"
					/>
				</div>
				<div className="carousel-item px-2">
					<img
						src={two}
						alt="Image 2"
						className="w-auto h-[300px] md:h-[400px] object-cover rounded"
					/>
				</div>
				<div className="carousel-item px-2">
					<img
						src={five}
						alt="Image 3"
						className="w-auto h-[300px] md:h-[400px] object-cover rounded"
					/>
				</div>
				<div className="carousel-item px-2">
					<img
						src={three}
						alt="Image 3"
						className="w-auto h-[300px] md:h-[400px] object-cover rounded"
					/>
				</div>
				<div className="carousel-item pr-2">
					<img
						src={one}
						alt="Image 4"
						className="w-auto h-[300px] md:h-[400px] object-cover rounded"
					/>
				</div>
				<div className="carousel-item px-2">
					<img
						src={six}
						alt="Image 3"
						className="w-auto h-[300px] md:h-[400px] object-cover rounded"
					/>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
