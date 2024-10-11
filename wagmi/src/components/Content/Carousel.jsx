import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import one from "../../assets/images/OurSpaces/1.webp";
import two from "../../assets/images/OurSpaces/2.webp";
import three from "../../assets/images/OurSpaces/3.webp";
import four from "../../assets/images/OurSpaces/4.webp";
import five from "../../assets/images/OurSpaces/5.webp";
import six from "../../assets/images/OurSpaces/6.webp";

const Carousel = () => {
  return (
    <div className="flex justify-center items-center mt-8 w-[80vw] h-[35vh] sm:h-[40vh] md:h-[40vh] lg:h-[55vh] mx-auto bg-wagmi-offwhite border-wagmi-blue rounded-box border-[2px] md:border-[4px] border-solid">
      <div className="rounded-box px-3 md:px-6 md:p-6">
        <CCarousel controls>
          <CCarouselItem>
            <CImage
              className="d-block max-h-[45vh] mx-auto my-auto aspect-[16/9] object-cover"
              src={one}
              alt="slide 1"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block max-h-[45vh] mx-auto my-auto aspect-[16/9] object-cover"
              src={two}
              alt="slide 2"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block max-h-[45vh] mx-auto my-auto aspect-[16/9] object-cover"
              src={three}
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block max-h-[45vh] mx-auto my-auto aspect-[16/9] object-cover"
              src={four}
              alt="slide 4"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block max-h-[45vh] mx-auto my-auto aspect-[16/9] object-cover"
              src={five}
              alt="slide 5"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block max-h-[45vh] mx-auto my-auto aspect-[16/9] object-cover"
              src={six}
              alt="slide 6"
            />
          </CCarouselItem>
        </CCarousel>
      </div>
    </div>
  );
};

export default Carousel;
