import React, { useRef } from "react";
import { gsap } from "gsap";
import wagmiWorkspace from "../.././assets/images/wagmiWorkspace.svg";

const ContentCards = () => {
	const box1Ref = useRef(null);
	const box2Ref = useRef(null);
	const box3Ref = useRef(null);
	const box4Ref = useRef(null);

	const content1Ref = useRef(null);
	const content2Ref = useRef(null);
	const content3Ref = useRef(null);
	const content4Ref = useRef(null);

	const handleMouseEnterBox = (boxIndex) => {
		const containerWidth = box1Ref.current.parentElement.offsetWidth;
		const containerHeight = box1Ref.current.parentElement.offsetHeight;

		const enlargeWidth = containerWidth * 0.9;
		const shrinkWidth = containerWidth - enlargeWidth;

		const enlargeHeight = containerHeight * 0.9;
		const shrinkHeight = containerHeight - enlargeHeight;

		const getBoxCurrentState = (boxRef) => {
			return {
				width: boxRef.current.offsetWidth,
				height: boxRef.current.offsetHeight,
				x: gsap.getProperty(boxRef.current, "x"),
				y: gsap.getProperty(boxRef.current, "y"),
			};
		};

		const getContentCurrentState = (contentRef) => {
			return {
				opacity: gsap.getProperty(contentRef.current, "opacity"),
			};
		};

		const animations = {
			1: [
				{
					ref: box1Ref,
					width: enlargeWidth,
					height: enlargeHeight,
					x: 0,
					y: 0,
				},
				{
					ref: box2Ref,
					width: shrinkWidth,
					height: enlargeHeight,
					x: enlargeWidth - containerWidth / 2,
					y: 0,
				},
				{
					ref: box3Ref,
					width: enlargeWidth,
					height: shrinkHeight,
					x: 0,
					y: enlargeHeight - containerHeight / 2,
				},
				{
					ref: box4Ref,
					width: shrinkWidth,
					height: shrinkHeight,
					x: enlargeWidth - containerWidth / 2,
					y: enlargeHeight - containerHeight / 2,
				},
			],
			2: [
				{
					ref: box1Ref,
					width: shrinkWidth,
					height: enlargeHeight,
					x: 0,
					y: 0,
				},
				{
					ref: box2Ref,
					width: enlargeWidth,
					height: enlargeHeight,
					x: -(enlargeWidth - containerWidth / 2),
					y: 0,
				},
				{
					ref: box3Ref,
					width: shrinkWidth,
					height: shrinkHeight,
					x: 0,
					y: containerHeight / 2 - shrinkHeight,
				},
				{
					ref: box4Ref,
					width: enlargeWidth,
					height: shrinkHeight,
					x: -(enlargeWidth - containerWidth / 2),
					y: containerHeight / 2 - shrinkHeight,
				},
			],
			3: [
				{
					ref: box1Ref,
					width: enlargeWidth,
					height: shrinkHeight,
					x: 0,
					y: 0,
				},
				{
					ref: box2Ref,
					width: shrinkWidth,
					height: shrinkHeight,
					x: containerWidth / 2 - shrinkWidth,
					y: 0,
				},
				{
					ref: box3Ref,
					width: enlargeWidth,
					height: enlargeHeight,
					x: 0,
					y: -(containerHeight / 2 - shrinkHeight),
				},
				{
					ref: box4Ref,
					width: shrinkWidth,
					height: enlargeHeight,
					x: containerWidth / 2 - shrinkWidth,
					y: -(containerHeight / 2 - shrinkHeight),
				},
			],
			4: [
				{
					ref: box1Ref,
					width: shrinkWidth,
					height: shrinkHeight,
					x: 0,
					y: 0,
				},
				{
					ref: box2Ref,
					width: enlargeWidth,
					height: shrinkHeight,
					x: -(containerWidth / 2 - shrinkWidth),
					y: 0,
				},
				{
					ref: box3Ref,
					width: shrinkWidth,
					height: enlargeHeight,
					x: 0,
					y: -(containerHeight / 2 - shrinkHeight),
				},
				{
					ref: box4Ref,
					width: enlargeWidth,
					height: enlargeHeight,
					x: -(containerWidth / 2 - shrinkWidth),
					y: -(containerHeight / 2 - shrinkHeight),
				},
			],
		};

		const contentRefs = [content1Ref, content2Ref, content3Ref, content4Ref];
		contentRefs.forEach((contentRef, index) => {
			const { opacity: startOpacity } = getContentCurrentState(contentRef);
			gsap.to(contentRef.current, {
				opacity: index + 1 === boxIndex ? 1 : 0,
				duration: 0.4,
				ease: "power2.out",
				overwrite: "auto",
			});
		});

		animations[boxIndex].forEach(({ ref, width, height, x, y }) => {
			const {
				width: startWidth,
				height: startHeight,
				x: startX,
				y: startY,
			} = getBoxCurrentState(ref);

			gsap.fromTo(
				ref.current,
				{
					width: startWidth,
					height: startHeight,
					x: startX,
					y: startY,
				},
				{
					width,
					height,
					x,
					y,
					duration: 0.7,
					ease: "power2.out",
					overwrite: "auto",
				}
			);
		});
	};

	const handleMouseLeave = () => {
		[box1Ref, box2Ref, box3Ref, box4Ref].forEach((boxRef) => {
			const {
				width: currentWidth,
				height: currentHeight,
				x: currentX,
				y: currentY,
			} = getBoxCurrentState(boxRef);

			gsap.fromTo(
				boxRef.current,
				{
					width: currentWidth,
					height: currentHeight,
					x: currentX,
					y: currentY,
				},
				{
					width: "100%",
					height: "100%",
					x: 0,
					y: 0,
					duration: 0.7,
					ease: "power2.out",
					overwrite: "auto",
				}
			);
		});

		[content1Ref, content2Ref, content3Ref, content4Ref].forEach(
			(contentRef) => {
				gsap.to(contentRef.current, {
					opacity: 1,
					duration: 0.4,
					ease: "power2.out",
					overwrite: "auto",
				});
			}
		);
	};

	return (
		<div className="mb-[10vh] grid grid-cols-2 grid-rows-2 gap-4 mx-auto w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[50vw] h-[80vw] sm:h-[65vw] md:h-[55vw] lg:h-[45vw] xl:h-[40vw] 2xl:h-[35vw] text-center text-white font-gilmer">
			{/* Box 1 */}
			<div
				ref={box1Ref}
				className="flex flex-col justify-center items-center rounded-2xl border-wagmi-blue border-4"
				onMouseEnter={() => handleMouseEnterBox(1)}
				onMouseLeave={handleMouseLeave}
			>
				<img ref={content1Ref} className="p-5" alt="" src={wagmiWorkspace} />
			</div>

			{/* Box 2 */}
			<div
				ref={box2Ref}
				className="flex justify-center items-center rounded-2xl bg-wagmi-blue"
				onMouseEnter={() => handleMouseEnterBox(2)}
				onMouseLeave={handleMouseLeave}
			>
				<span ref={content2Ref} className="tracking-tight">
					Our Spaces
				</span>
			</div>

			{/* Box 3 */}
			<div
				ref={box3Ref}
				className="flex justify-center items-center rounded-2xl bg-wagmi-blue"
				onMouseEnter={() => handleMouseEnterBox(3)}
				onMouseLeave={handleMouseLeave}
			>
				<span ref={content3Ref} className="tracking-tight">
					Amenities
				</span>
			</div>

			{/* Box 4 */}
			<div
				ref={box4Ref}
				className="flex justify-center items-center rounded-2xl border-wagmi-blue border-4 text-wagmi-blue"
				onMouseEnter={() => handleMouseEnterBox(4)}
				onMouseLeave={handleMouseLeave}
			>
				<span ref={content4Ref} className="tracking-tight">
					Why Wagmi?
				</span>
			</div>
		</div>
	);
};

export default ContentCards;
