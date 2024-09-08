import React from "react";
import wagmiWorkspace from "../.././assets/images/wagmiWorkspace.svg";

const ContentCards = () => {
	return (
		<div className="grid grid-cols-2 grid-rows-2 gap-2 mx-auto w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[50vw] h-[80vw] sm:h-[65vw] md:h-[55vw] lg:h-[45vw] xl:h-[40vw] 2xl:h-[35vw] text-center text-white font-gilmer">
			{/* Box 1 */}
			<div className="flex flex-col justify-center items-center rounded-2xl border-wagmi-blue border-4">
				<img className="p-5" alt="" src={wagmiWorkspace} />
			</div>

			{/* Box 2 */}
			<div className="flex justify-center items-center rounded-2xl bg-wagmi-blue">
				<span className="tracking-tight">Our Spaces</span>
			</div>

			{/* Box 3 */}
			<div className="flex justify-center items-center rounded-2xl bg-wagmi-blue">
				<span className="tracking-tight">Amenities</span>
			</div>

			{/* Box 4 */}
			<div className="flex justify-center items-center rounded-2xl border-wagmi-blue border-4 text-wagmi-blue">
				<span className="tracking-tight">Why Wagmi?</span>
			</div>
		</div>
	);
};

export default ContentCards;
