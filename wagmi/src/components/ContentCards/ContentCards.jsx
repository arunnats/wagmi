import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import wagmiWorkspace from "../.././assets/images/wagmiWorkspace.svg";

const ContentCards = ({ reset }) => {
	const box1Ref = useRef(null);
	const box2Ref = useRef(null);
	const box3Ref = useRef(null);
	const box4Ref = useRef(null);

	const content1Ref = useRef(null);
	const content2Ref = useRef(null);
	const content3Ref = useRef(null);
	const content4Ref = useRef(null);

	const [isBox1Enlarged, setIsBox1Enlarged] = useState(false);
	const [isBox2Enlarged, setIsBox2Enlarged] = useState(false);
	const [isBox3Enlarged, setIsBox3Enlarged] = useState(false);
	const [isBox4Enlarged, setIsBox4Enlarged] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (isBox1Enlarged) {
				handleMouseEnterBox(1);
			} else if (isBox2Enlarged) {
				handleMouseEnterBox(2);
			} else if (isBox3Enlarged) {
				handleMouseEnterBox(3);
			} else if (isBox4Enlarged) {
				handleMouseEnterBox(4);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isBox1Enlarged, isBox2Enlarged, isBox3Enlarged, isBox4Enlarged]);

	const handleMouseEnterBox = (boxIndex) => {
		if (boxIndex === 1) {
			setIsBox1Enlarged(true);
			setIsBox2Enlarged(false);
			setIsBox3Enlarged(false);
			setIsBox4Enlarged(false);
		} else if (boxIndex === 2) {
			setIsBox1Enlarged(false);
			setIsBox2Enlarged(true);
			setIsBox3Enlarged(false);
			setIsBox4Enlarged(false);
		} else if (boxIndex === 3) {
			setIsBox1Enlarged(false);
			setIsBox2Enlarged(false);
			setIsBox3Enlarged(true);
			setIsBox4Enlarged(false);
		} else if (boxIndex === 4) {
			setIsBox1Enlarged(false);
			setIsBox2Enlarged(false);
			setIsBox3Enlarged(false);
			setIsBox4Enlarged(true);
		}

		const containerWidth = box1Ref.current.parentElement.offsetWidth;
		const containerHeight = box1Ref.current.parentElement.offsetHeight;

		const enlargeWidth = containerWidth * 0.9;
		const shrinkWidth = containerWidth - enlargeWidth;

		const enlargeHeight = containerHeight * 0.9;
		const shrinkHeight = containerHeight - enlargeHeight;

		const shrinkConst = 5;

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
					y: -shrinkConst + enlargeHeight - containerHeight / 2,
				},
				{
					ref: box4Ref,
					width: shrinkWidth,
					height: shrinkHeight,
					x: enlargeWidth - containerWidth / 2,
					y: -shrinkConst + enlargeHeight - containerHeight / 2,
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
					y: -shrinkConst + containerHeight / 2 - shrinkHeight,
				},
				{
					ref: box4Ref,
					width: enlargeWidth,
					height: shrinkHeight,
					x: -(enlargeWidth - containerWidth / 2),
					y: -shrinkConst + containerHeight / 2 - shrinkHeight,
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
					y: -shrinkConst - (containerHeight / 2 - shrinkHeight),
				},
				{
					ref: box4Ref,
					width: shrinkWidth,
					height: enlargeHeight,
					x: containerWidth / 2 - shrinkWidth,
					y: -shrinkConst - (containerHeight / 2 - shrinkHeight),
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
					y: -shrinkConst - (containerHeight / 2 - shrinkHeight),
				},
				{
					ref: box4Ref,
					width: enlargeWidth,
					height: enlargeHeight,
					x: -(containerWidth / 2 - shrinkWidth),
					y: -shrinkConst - (containerHeight / 2 - shrinkHeight),
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

	useEffect(() => {
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

		if (reset) {
			console.log(reset);

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
		}
	}, [reset]);

	const handleMouseLeave = (boxIndex) => {
		if (boxIndex === 1) {
			if (isBox2Enlarged || isBox3Enlarged || isBox4Enlarged)
				setIsBox1Enlarged(false);
		} else if (boxIndex === 2) {
			if (isBox1Enlarged || isBox3Enlarged || isBox4Enlarged)
				setIsBox2Enlarged(false);
		} else if (boxIndex === 3) {
			if (isBox2Enlarged || isBox1Enlarged || isBox4Enlarged)
				setIsBox3Enlarged(false);
		} else if (boxIndex === 4) {
			if (isBox2Enlarged || isBox3Enlarged || isBox1Enlarged)
				setIsBox4Enlarged(false);
		}

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
		<div className="mb-[10vh] grid grid-cols-2 grid-rows-2 gap-4 mx-auto w-[95vw] pr-3 sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[50vw] h-[80vw] sm:h-[65vw] md:h-[55vw] lg:h-[45vw] xl:h-[40vw] 2xl:h-[35vw] text-center text-white font-gilmer">
			{/* Box 1 */}
			<div
				ref={box1Ref}
				className="flex flex-col justify-center items-center rounded-2xl border-wagmi-blue border-4"
				onMouseEnter={() => handleMouseEnterBox(1)}
				onMouseLeave={() => handleMouseLeave(1)}
			>
				<img ref={content1Ref} className="p-5" alt="" src={wagmiWorkspace} />
			</div>

			{/* Box 2 */}
			<div
				ref={box2Ref}
				className="flex justify-center items-center rounded-2xl bg-wagmi-blue"
				onMouseEnter={() => handleMouseEnterBox(2)}
				onMouseLeave={() => handleMouseLeave(2)}
			>
				<div ref={content2Ref} className="tracking-tight">
					{isBox2Enlarged ? (
						<div>
							<p>Get to know our spaces</p>
						</div>
					) : (
						<div>
							<p>Our Spaces</p>
						</div>
					)}
				</div>
			</div>

			{/* Box 3 */}
			<div
				ref={box3Ref}
				className="flex justify-center items-center rounded-2xl bg-wagmi-blue"
				onMouseEnter={() => handleMouseEnterBox(3)}
				onMouseLeave={() => handleMouseLeave(3)}
			>
				<div ref={content3Ref} className="tracking-tight">
					{isBox3Enlarged ? (
						<div>
							<p>Get to know our Amenities</p>
						</div>
					) : (
						<div>
							<p>Amenities</p>
						</div>
					)}
				</div>
			</div>

			{/* Box 4 */}
			<div
				ref={box4Ref}
				className="flex justify-center items-center rounded-2xl border-wagmi-blue border-4 text-wagmi-blue"
				onMouseEnter={() => handleMouseEnterBox(4)}
				onMouseLeave={() => handleMouseLeave(4)}
			>
				<div ref={content4Ref} className="tracking-tight">
					{isBox4Enlarged ? (
						<div>
							<p>Get to know why Wagmi?</p>
						</div>
					) : (
						<div>
							<p>Why Wagmi?</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ContentCards;
