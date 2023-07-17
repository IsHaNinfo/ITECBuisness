import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "@mui/system";

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handleButtonClick = () => {
    // Logic for the additional button action
  };

  const images = [
    {
      src: "/images/Office.png",
      alt: "Slide 1",
      buttonLabel: "Button 1",
      buttonColor: "rgb(247, 25, 113) !important",
    },
    {
      src: "/images/Office2.jpg",
      alt: "Slide 2",
      buttonLabel: "Button 2",
      buttonColor: "#4f7cff",
    },
    {
      src: "/images/Office3.jpeg",
      alt: "Slide 3",
      buttonLabel: "Button 3",
      buttonColor: "#3bea9e",
    },
  ];

  return (
    <StyledCarousel
      showThumbs={false}
      selectedItem={activeIndex}
      onChange={handleSlideChange}
      autoPlay
      interval={5000}
      infiniteLoop
      transitionTime={500}
    >
      {images.map((image, index) => (
        <StyledSlide key={index}>
          <StyledImage src={image.src} alt={image.alt} />
          <StyledButton
            onClick={handleButtonClick}
            style={{
              backgroundColor: image.buttonColor,
              borderRadius: "1px 20px",
            }}
          >
            {image.buttonLabel}
          </StyledButton>
        </StyledSlide>
      ))}
    </StyledCarousel>
  );
};

const StyledSlide = styled("div")`
  position: relative;
`;

const StyledImage = styled("img")`
  width: 100%;
  height: 700px;
  object-fit: cover;
`;

const StyledButton = styled("button")`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #f71971 !important;
    border-radius: 0px 20px;
  }
`;

const StyledCarousel = styled(Carousel)`
  height: 200px; /* Set your desired height */
`;

export default Slideshow;
