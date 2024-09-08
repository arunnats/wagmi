import React, { useRef } from "react";
import { gsap } from "gsap";
import wagmiWorkspace from "../.././assets/images/wagmiWorkspace.svg";

const ContentCards = () => {
	const box1Ref = useRef(null);
	const box2Ref = useRef(null);
	const box3Ref = useRef(null);
	const box4Ref = useRef(null);

	const handleMouseEnterBox = (boxIndex) => {
		const containerWidth = box1Ref.current.parentElement.offsetWidth;
		const containerHeight = box1Ref.current.parentElement.offsetHeight;
		console.log(containerHeight);
		console.log(containerWidth);

		const enlargeWidth = containerWidth * 0.9;
		const shrinkWidth = containerWidth - enlargeWidth;

		const enlargeHeight = containerHeight * 0.9;
		const shrinkHeight = containerHeight - enlargeHeight;

		// Define animations based on the boxIndex
		const animations = {
			1: [
				{
					ref: box1Ref,
					width: enlargeWidth,
					height: enlargeHeight,
					x: 0,
					y: 0,
					transformOrigin: "top left",
				},
				{
					ref: box2Ref,
					width: shrinkWidth,
					height: enlargeHeight,
					x: enlargeWidth - containerWidth / 2,
					y: 0,
					transformOrigin: "top right",
				},
				{
					ref: box3Ref,
					width: enlargeWidth,
					height: shrinkHeight,
					x: 0,
					y: enlargeHeight - containerHeight / 2,
					transformOrigin: "bottom left",
				},
				{
					ref: box4Ref,
					width: shrinkWidth,
					height: shrinkHeight,
					x: enlargeWidth - containerWidth / 2,
					y: enlargeHeight - containerHeight / 2,
					transformOrigin: "bottom left",
				},
			],
			2: [
				{
					ref: box1Ref,
					width: shrinkWidth,
					height: enlargeHeight,
					x: 0,
					y: 0,
					transformOrigin: "top left",
				},
				{
					ref: box2Ref,
					width: enlargeWidth,
					height: enlargeHeight,
					x: -(enlargeWidth - containerWidth / 2),
					y: 0,
					transformOrigin: "top right",
				},
				{
					ref: box3Ref,
					width: shrinkWidth,
					height: shrinkHeight,
					x: 0,
					y: containerHeight / 2 - shrinkHeight,
					transformOrigin: "bottom left",
				},
				{
					ref: box4Ref,
					width: enlargeWidth,
					height: shrinkHeight,
					x: -(enlargeWidth - containerWidth / 2),
					y: containerHeight / 2 - shrinkHeight,
					transformOrigin: "bottom right",
				},
			],
			3: [
				{
					ref: box1Ref,
					width: enlargeWidth,
					height: shrinkHeight,
					x: 0,
					y: 0,
					transformOrigin: "top left",
				},
				{
					ref: box2Ref,
					width: shrinkWidth,
					height: shrinkHeight,
					x: enlargeWidth,
					y: 0,
					transformOrigin: "top right",
				},
				{
					ref: box3Ref,
					width: enlargeWidth,
					height: enlargeHeight,
					x: 0,
					y: -(containerHeight / 2 - shrinkHeight),
					transformOrigin: "bottom left",
				},
				{
					ref: box4Ref,
					width: shrinkWidth,
					height: enlargeHeight,
					x: enlargeWidth,
					y: shrinkHeight,
					transformOrigin: "bottom right",
				},
			],
			4: [
				{
					ref: box1Ref,
					width: shrinkWidth,
					height: shrinkHeight,
					x: 0,
					y: 0,
					transformOrigin: "top left",
				},
				{
					ref: box2Ref,
					width: enlargeWidth,
					height: shrinkHeight,
					x: shrinkWidth,
					y: 0,
					transformOrigin: "top right",
				},
				{
					ref: box3Ref,
					width: shrinkWidth,
					height: enlargeHeight,
					x: 0,
					y: shrinkHeight,
					transformOrigin: "bottom left",
				},
				{
					ref: box4Ref,
					width: enlargeWidth,
					height: enlargeHeight,
					x: shrinkWidth,
					y: shrinkHeight,
					transformOrigin: "bottom right",
				},
			],
		};

		// Apply animations
		animations[boxIndex].forEach(({ ref, width, height, x, y }) => {
			gsap.to(ref.current, {
				width,
				height,
				x,
				y,
				duration: 0.5,
				ease: "power3.out",
			});
		});
	};

	const handleMouseLeave = () => {
		// Reset all boxes to their original sizes and positions
		gsap.to(
			[box1Ref.current, box2Ref.current, box3Ref.current, box4Ref.current],
			{
				width: "100%",
				height: "100%",
				x: 0,
				y: 0,
				duration: 0.5,
				ease: "power3.out",
			}
		);
	};

	return (
		<div className="mb-[10vh] bg-red-400 grid grid-cols-2 grid-rows-2 gap-2 mx-auto w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[50vw] h-[95vw] sm:h-[85vw] md:h-[75vw] lg:h-[65vw] xl:h-[55vw] 2xl:h-[50vw] text-center text-white font-gilmer">
			{/* Box 1 */}
			<div
				ref={box1Ref}
				className="flex flex-col justify-center items-center rounded-2xl border-wagmi-blue border-4"
				onMouseEnter={() => handleMouseEnterBox(1)}
				onMouseLeave={handleMouseLeave}
			>
				<img className="p-5" alt="" src={wagmiWorkspace} />
			</div>

			{/* Box 2 */}
			<div
				ref={box2Ref}
				className="flex justify-center items-center rounded-2xl bg-wagmi-blue"
				onMouseEnter={() => handleMouseEnterBox(2)}
				onMouseLeave={handleMouseLeave}
			>
				<span className="tracking-tight">Our Spaces</span>
			</div>

			{/* Box 3 */}
			<div
				ref={box3Ref}
				className="flex justify-center items-center rounded-2xl bg-wagmi-blue"
				onMouseEnter={() => handleMouseEnterBox(3)}
				onMouseLeave={handleMouseLeave}
			>
				<span className="tracking-tight">Amenities</span>
			</div>

			{/* Box 4 */}
			<div
				ref={box4Ref}
				className="flex justify-center items-center rounded-2xl border-wagmi-blue border-4 text-wagmi-blue"
				onMouseEnter={() => handleMouseEnterBox(4)}
				onMouseLeave={handleMouseLeave}
			>
				<span className="tracking-tight">Why Wagmi?</span>
			</div>
		</div>
	);
};

export default ContentCards;
