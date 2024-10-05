import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import wagmiWorkspace from "../.././assets/images/wagmiWorkspace.svg";
import wagmiSpaces from "../.././assets/images/wagmiSpaces.svg";
import amenitiesSpaces from "../.././assets/images/amenitiesSpaces.svg";
import joinSpaces from "../.././assets/images/joinSpaces.svg";
import ButtonSmall from "../ButtonSmall/ButtonSmall";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const ContentCards = ({ yes, scrollToSection }) => {
	const { ourSpacesRef, amenitiesRef, whyChooseRef, joinUsRef } =
		scrollToSection;

	const divRefWhole = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			divRefWhole.current,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: divRefWhole.current,
					start: "top 80%",
					end: "bottom 50%",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	const box1Ref = useRef(null);
	const box2Ref = useRef(null);
	const box3Ref = useRef(null);
	const box4Ref = useRef(null);

	const content1Ref = useRef(null);
	const content2Ref = useRef(null);
	const content3Ref = useRef(null);
	const content4Ref = useRef(null);

	const contentInner1Ref = useRef(null);
	const contentInner2Ref = useRef(null);
	const contentInner3Ref = useRef(null);
	const contentInner4Ref = useRef(null);

	const [isBox1Enlarged, setIsBox1Enlarged] = useState(false);
	const [isBox2Enlarged, setIsBox2Enlarged] = useState(false);
	const [isBox3Enlarged, setIsBox3Enlarged] = useState(false);
	const [isBox4Enlarged, setIsBox4Enlarged] = useState(false);
	const [reset, setReset] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (isBox1Enlarged) {
				handleBoxClick(1);
			} else if (isBox2Enlarged) {
				handleBoxClick(2);
			} else if (isBox3Enlarged) {
				handleBoxClick(3);
			} else if (isBox4Enlarged) {
				handleBoxClick(4);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isBox1Enlarged, isBox2Enlarged, isBox3Enlarged, isBox4Enlarged]);

	const handleBoxClick = (boxIndex) => {
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
				delay: index + 1 === boxIndex ? 0.3 : 0,
				duration: index + 1 === boxIndex ? 0.5 : 0.2,
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

	const handleReset = () => {
		setIsBox1Enlarged(false);
		setIsBox2Enlarged(false);
		setIsBox3Enlarged(false);
		setIsBox4Enlarged(false);

		const getBoxCurrentState = (boxRef) => {
			return {
				width: gsap.getProperty(boxRef.current, "width"),
				height: gsap.getProperty(boxRef.current, "height"),
				x: gsap.getProperty(boxRef.current, "x"),
				y: gsap.getProperty(boxRef.current, "y"),
			};
		};

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
					duration: 0.2,
					ease: "power2.out",
					overwrite: "auto",
				}
			);
		});

		[content1Ref, content2Ref, content3Ref, content4Ref].forEach(
			(contentRef) => {
				gsap.to(contentRef.current, {
					opacity: 1,
					duration: 0.8,
					ease: "power2.out",
					overwrite: "auto",
				});
			}
		);
	};

	const scrollTo = (ref) => {
		gsap.to(window, {
			duration: 1.5,
			scrollTo: { y: ref.current, autoKill: true, offsetY: 20 },
			ease: "power3.out",
		});
	};

	return (
		<div className="mb-[2vh] md:mb-[0vh] lg:mb-[7vh]" ref={divRefWhole}>
			{isBox1Enlarged || isBox2Enlarged || isBox3Enlarged || isBox4Enlarged ? (
				<>
					<button
						onClick={() => handleReset()}
						className="my-3 mx-auto w-[200px] h-[40px] rounded-[10px] md:w-[300px] md:h-[50px] md:rounded-[14px] border-wagmi-blue border-[2px] md:border-[3px] border-solid flex items-center justify-center bg-wagmi-white"
					>
						<h2 className="text-sm md:text-[18px] font-gilmer text-wagmi-blue">
							Click to reset.
						</h2>
					</button>
				</>
			) : (
				<>
					<div className="my-3 mx-auto w-[200px] h-[40px] rounded-[10px] md:w-[300px] md:h-[50px] md:rounded-[14px] border-wagmi-blue border-[2px] md:border-[3px] border-solid flex items-center justify-center bg-wagmi-white ">
						<h2 className="text-sm md:text-[18px] font-gilmer text-wagmi-blue">
							{" "}
							Click on boxes to expand.
						</h2>
					</div>
				</>
			)}

			<div className=" grid grid-cols-2 grid-rows-2 gap-4 mx-auto w-[90vw] pr-3 sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[50vw] h-[80vw] sm:h-[65vw] md:h-[55vw] lg:h-[45vw] xl:h-[40vw] 2xl:h-[35vw] text-center text-white font-gilmer">
				{/* Box 1 */}
				<div
					ref={box1Ref}
					className="flex flex-col justify-center items-center rounded-2xl border-wagmi-blue border-[2px] md:border-[4px]"
					onClick={() => handleBoxClick(1)}
					// onMouseLeave={() => handleMouseLeave(1)}
				>
					<div ref={content1Ref} className="tracking-tight">
						{isBox1Enlarged ? (
							<div>
								<img
									className="mt-4 mb-2 mx-auto w-[60%] h-auto sm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%] p-5"
									alt=""
									src={wagmiWorkspace}
								/>
								<div className="mx-auto w-[80%] text-wagmi-blue">
									<p className="text-justify text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw] font-gilmer">
										Discover and transform the way you work with WAGMI, your
										premier coworking and managed office space provider in
										Kochi. At WAGMI, we redefine the workspace experience with
										modern, flexible environments that cater to today’s dynamic
										work culture.
									</p>
								</div>
							</div>
						) : (
							<div>
								<img
									className="w-[70%] mx-auto h-auto sm:w-[65%] md:w-[60%] object-cover m-4 transition-transform duration-300 ease-out hover:-translate-y-[10px]"
									alt=""
									src={wagmiWorkspace}
								/>
							</div>
						)}
					</div>
				</div>

				{/* Box 2 */}
				<div
					ref={box2Ref}
					className="flex justify-center items-center rounded-2xl bg-wagmi-blue"
					onClick={() => handleBoxClick(2)}
					// onMouseLeave={() => handleMouseLeave(2)}
				>
					<div ref={content2Ref} className="tracking-tight">
						{isBox2Enlarged ? (
							<div className="w-full mb-10 p-5">
								<img
									className="mt-4 mb-2 mx-auto w-[60%] h-auto sm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%] p-5"
									alt=""
									src={joinSpaces}
								/>
								<div className="mx-auto w-[80%]">
									<p className="text-justify text-wagmi-white text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw] font-gilmer">
										Discover how WAGMI can elevate your workspace and empower
										your business. Join our thriving community of innovators!"
									</p>
								</div>
								<div className="hidden lg:flex justify-center mt-4">
									<ButtonSmall
										text="See More >"
										onClick={() => scrollTo(joinUsRef)}
										alt={true}
									/>
								</div>
							</div>
						) : (
							<div className="transition-transform duration-300 ease-out hover:-translate-y-[10px]">
								<img
									className="w-[70%] mx-auto h-auto sm:w-[65%] md:w-[60%]  m-4"
									alt=""
									src={joinSpaces}
								/>
								<p className="text-[2vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1vw]">
									Join us
								</p>
							</div>
						)}
					</div>
				</div>

				{/* Box 3 */}
				<div
					ref={box3Ref}
					className="flex justify-center items-center rounded-2xl bg-wagmi-blue"
					onClick={() => handleBoxClick(3)}
					// onMouseLeave={() => handleMouseLeave(3)}
				>
					<div ref={content3Ref} className="tracking-tight">
						{isBox3Enlarged ? (
							<div className="w-full mb-10 p-5">
								<img
									className="mt-4 mb-2 mx-auto w-[60%] h-auto sm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%] p-5"
									alt=""
									src={amenitiesSpaces}
								/>
								<div className="mx-auto w-[80%]">
									<p className="text-justify text-wagmi-white text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw] font-gilmer">
										Our spaces are designed with state-of-the-art technology and
										modern amenities to enhance your workday. Learn more about
										our dedication for your productivity and comfort
									</p>
								</div>
								<div className="hidden lg:flex justify-center mt-4">
									<ButtonSmall
										text="See More >"
										onClick={() => scrollTo(amenitiesRef)}
										alt={true}
									/>
								</div>
							</div>
						) : (
							<div className="transition-transform duration-300 ease-out hover:-translate-y-[10px]">
								<img
									className="w-[70%] mx-auto h-auto sm:w-[65%] md:w-[60%]  m-4"
									alt=""
									src={amenitiesSpaces}
								/>
								<p className="text-[2vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1vw]">
									Amenities
								</p>
							</div>
						)}
					</div>
				</div>

				{/* Box 4 */}
				<div
					ref={box4Ref}
					className="flex justify-center items-center rounded-2xl border-wagmi-blue border-[2px] md:border-[4px] text-wagmi-blue"
					onClick={() => handleBoxClick(4)}
					// onMouseLeave={() => handleMouseLeave(4)}
				>
					<div ref={content4Ref} className="tracking-tight">
						{isBox4Enlarged ? (
							<div className="w-full mb-10 p-5">
								<img
									className="mt-4 mb-2 mx-auto w-[60%] h-auto sm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%] p-5"
									alt=""
									src={wagmiSpaces}
								/>
								<div className="mx-auto w-[80%]">
									<p className="text-justify text-wagmi-blue text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw] font-gilmer">
										Step into a workspace that fits your style! Whether you
										crave the flexibility of a hot desk, the consistency of a
										dedicated desk, or the privacy of a cabin, we’ve got the
										perfect spot for you!
									</p>
								</div>
								<div className="hidden lg:flex justify-center mt-4">
									<ButtonSmall
										text="See More >"
										onClick={() => scrollTo(ourSpacesRef)}
									/>
								</div>
							</div>
						) : (
							<div className="transition-transform duration-300 ease-out hover:-translate-y-[10px]">
								<img
									className="w-[70%] mx-auto h-auto sm:w-[65%] md:w-[60%]  m-4"
									alt=""
									src={wagmiSpaces}
								/>
								<p className="text-[2vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1vw]">
									Our Spaces
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentCards;
