import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from "reactstrap";
import logo from "assets/img/logo.jpg";
import image2 from "assets/img/image2.jpg";
import image3 from "assets/img/image3.png";

function LandingPage() {
  const items = [
    {
      src: logo,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
    },
    {
      src: image2,
      altText: "Building Tomorrow's Leaders",
      caption: `Empowering Students for a Brighter Tomorrow`,
    },
    {
      src: image3,
      altText: "Commitment to Excellence in Education",
      caption: `Nurturing Potential, Achieving Success`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem key={index}>
        <img
          src={item.src}
          alt={item.altText}
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
}

export default LandingPage;
