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
      buttonLabel: "Read More",
      buttonColor: "rgb(247, 25, 113)",
      Title: "Best Solution Provider",
      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: "/images/Office2.jpg",
      alt: "Slide 2",
      buttonLabel: "Read More",
      buttonColor: "rgb(247, 25, 113)",
      Title: "Outstanding  services",
      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: "/images/Office3.jpeg",
      alt: "Slide 3",
      buttonLabel: "Read More",
      buttonColor: "rgb(247, 25, 113)",
      Title: "Modern Techonologies",
      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Carousel
      showThumbs={false}
      selectedItem={activeIndex}
      onChange={handleSlideChange}
      autoPlay
      interval={5000}
      infiniteLoop
      transitionTime={800}
    >
      {images.map((image, index) => (
        <StyledSlide key={index}>
          <StyledImageContainer>
            <StyledImage src={image.src} alt={image.alt} />
            <StyledOverlay />
            <StyledTitle active={index === activeIndex}>
              {image.Title}
            </StyledTitle>
            <StyledText active={index === activeIndex}>{image.Text}</StyledText>
          </StyledImageContainer>
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
    </Carousel>
  );
};

const StyledSlide = styled("div")`
  position: relative;
`;

const StyledImageContainer = styled("div")`
  position: relative;
`;

const StyledImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    width: 80%;
    height: 500px;
  }
`;

const StyledOverlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as desired */
`;

const StyledTitle = styled("div")`
  position: absolute;
  top: -10%;
  left: 50%;
  margin-top: 25px;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  animation: ${({ active }) =>
    active ? "slideDown 1s ease-in-out forwards" : "none"};

  @keyframes slideDown {
    0% {
      top: -100%;
    }
    100% {
      top: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 28px;
    top: 40%;
    animation: ${({ active }) =>
      active ? "slideDown 1s ease-in-out forwards" : "none"};

    @keyframes slideDown {
      0% {
        top: -100%;
      }
      100% {
        top: 50%;
      }
    }
  }
`;

const StyledText = styled("div")`
  position: absolute;
  bottom: -190%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: #ffffff;
  font-size: 32px;
  text-align: center;
  animation: ${({ active }) =>
    active ? "slideUp 1s ease-in-out forwards" : "none"};

  @keyframes slideUp {
    0% {
      bottom: -10%;
    }
    100% {
      bottom: 35%;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    bottom: 20%;
    animation: ${({ active }) =>
      active ? "slideUp 1s ease-in-out forwards" : "none"};

    @keyframes slideUp {
      0% {
        bottom: -10%;
      }
      100% {
        bottom: 40%;
      }
    }
  }
`;

const StyledButton = styled("button")`
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  color: #ffffff;
  height: 65px;
  cursor: pointer;
  &:hover {
    background-color: #464646 !important;
    border-radius: 0px 20px;
  }
  @media only screen and (max-width: 768px) {
    bottom: 10%;
  }
`;

export default Slideshow;
