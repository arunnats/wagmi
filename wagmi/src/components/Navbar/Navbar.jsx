import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImageDesk from "../.././assets/images/heroImage.webp";
import heroImageMob from "../.././assets/images/heroImage.webp";
import wagmiLogo from "../.././assets/images/wagmiLogo.svg";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [heroImageSrc, setHeroImageSrc] = useState("");
  const logoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setHeroImageSrc(heroImageMob);
      } else {
        setHeroImageSrc(heroImageDesk);
      }
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const setLogoAnimation = () => {
    const isMobile = window.innerWidth <= 768;
    const scaleValue = isMobile ? 2 : 2.2;
    const translateValue = isMobile ? 1.7 : 1.6;

    gsap.set(logoRef.current, {
      y: -(window.innerHeight / translateValue),
      scale: scaleValue,
    });

    gsap.to(logoRef.current, {
      y: 0,
      scale: 1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 5vh",
        end: "bottom 95vh",
        scrub: 1.5,
      },
      ease: "power1.inOut",
    });
  };

  useEffect(() => {
    setLogoAnimation();
  }, []);

  return (
    <>
      <div className="w-full h-screen z-[998]">
        <img
          src={heroImageSrc}
          alt="Hero Image"
          className="w-full h-full object-cover"
          ref={heroRef}
        />
      </div>

      <div className="w-full h-[90px] flex items-center z-[10] px-[2em] py-0 bg-wagmi-blue">
        <div className="flex flex-grow justify-center relative">
          <img
            className="h-10 md:h-13 lg:h-16 mx-auto will-change-scroll will-change-transform"
            src={wagmiLogo}
            alt="Wagmi Logo"
            ref={logoRef}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
