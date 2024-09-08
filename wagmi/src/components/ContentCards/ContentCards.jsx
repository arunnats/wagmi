import React from "react";
import wagmiWorkspace from "../.././assets/images/wagmiWorkspace.svg";

const ContentCards = () => {
	return (
		<div className="grid grid-cols-2 grid-rows-2 gap-2 mx-auto w-[80vw] h-[60vw] text-center text-white font-gilmer-bold">
			{/* Box 1 */}
			<div className="flex flex-col justify-center items-center rounded-2xl border-wagmi-blue border-4">
				<img className="  rounded-2xl" alt="" src={wagmiWorkspace} />
			</div>

			{/* Box 2 */}
			<div className="flex justify-center items-center rounded-2xl bg-wagmi-blue">
				<span className="tracking-tight">Amenities</span>
			</div>

			{/* Box 3 */}
			<div className="flex justify-center items-center rounded-2xl border-wagmi-blue border-4 text-wagmi-blue">
				<span className="tracking-tight">Why Wagmi?</span>
			</div>

			{/* Box 4 */}
			<div className="flex justify-center items-center rounded-2xl bg-wagmi-blue">
				<span className="tracking-tight">Our Spaces</span>
			</div>
		</div>
	);
};

export default ContentCards;
