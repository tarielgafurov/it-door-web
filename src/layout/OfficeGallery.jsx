import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function OfficeGallery() {
  const [images, setImages] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    fetch("http://157.173.121.178/api/office/get-all/?page=1")
      .then((response) => response.json())
      .then((data) => {
        setImages(data.result);  
        if (data.result.length > 0) {
          setSelectedImage(data.result[0]);
        }
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const handleThumbnailClick = (img, index) => {
    setSelectedImage(img);
    setVisibleIndex(index);
    triggerAnimation();
  };

  const handleNavigation = (direction) => {
    let newIndex = (visibleIndex + direction + images.length) % images.length;
    setVisibleIndex(newIndex);
    setSelectedImage(images[newIndex]);
    triggerAnimation();

    const newScrollPosition =
      direction === 1 && newIndex === 0
        ? 0
        : direction === -1 && newIndex === images.length - 1
        ? -230 * (images.length - 1)
        : scrollPosition - direction * 230;
    setScrollPosition(newScrollPosition);
  };

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const index = Math.floor(scrollLeft / 230);
    if (images[index]) {  
      setSelectedImage(images[index]);
      setVisibleIndex(index);
      triggerAnimation();
    }
  };

  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 600);
  };

  const handleWheel = (e) => {
    const delta = e.deltaY; // Detect vertical scroll

    // Scroll left if the user scrolls up, right if down
    const newScrollPosition = delta > 0 
      ? scrollPosition - 230 
      : scrollPosition + 230;

    // Limit scrolling within the bounds
    const maxScroll = (images.length - 1) * 230;
    const minScroll = 0;
    const clampedScrollPosition = Math.min(Math.max(newScrollPosition, minScroll), maxScroll);
    
    setScrollPosition(clampedScrollPosition);
  };

  return (
    <Container>
      <OurOfficeStyled>
        <h1>Наш офис</h1>
      </OurOfficeStyled>
      <ImageWrapper onWheel={handleWheel}> {/* Adding wheel event listener */}
        {selectedImage && (
          <MainImage
            src={selectedImage.image}  
            alt="Main"
            className={animate ? "scale-in" : ""}
          />
        )}
        <GalleryContainer>
          <Thumbnails
            scrollPosition={scrollPosition}
            onScroll={handleScroll}  
          >
            {images.map((img, index) => (  
              <ThumbnailImage
                key={index}
                src={img.image}
                active={img.image === selectedImage.image}
                onClick={() => handleThumbnailClick(img, index)}
              />
            ))}
          </Thumbnails>
        </GalleryContainer>
        <Buttons>
          <Button onClick={() => handleNavigation(-1)}>
            <BsChevronLeft />
          </Button>
          <Button onClick={() => handleNavigation(1)}>
            <BsChevronRight />
          </Button>
        </Buttons>
      </ImageWrapper>
    </Container>
  );
}

export default OfficeGallery;

const Container = styled.div`
  width: 100%;
  height: 906px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  position: relative;
  @media (max-width: 834px) {
    height: 700px;
    margin-top: 30px;
  }
  @media (max-width: 375px) {
    height: 500px;
    margin-top: 20px;
  }
`;

const OurOfficeStyled = styled.div`
  width: 70%;
  > h1 {
    color: white;
    font-size: 32px;
    line-height: 38px;
    text-align: start;
    @media (max-width: 834px) {
      font-size: 28px;
      line-height: 34px;
    }
    @media (max-width: 375px) {
      font-size: 22px;
      line-height: 28px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const scaleIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 824px;
  border-radius: 10px;
  opacity: 1;
  transform: scale(1);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  &.scale-in {
    animation: ${scaleIn} 0.6s ease-in-out;
  }
  @media (max-width: 834px) {
    height: 600px;
  }
  @media (max-width: 375px) {
    height: 300px;
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 100px;
  left: 58%;
  transform: translateX(-50%);
  align-items: center;
  width: 83%;
  overflow: hidden;
  @media (max-width: 834px) {
    bottom: 70px;
    width: 83%;
  }
  @media (max-width: 375px) {
    bottom: 50px;
    width: 85%;
  }
`;

const Thumbnails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.scrollPosition}px);

  @media (max-width: 834px) {
    transform: translateX(${(props) => props.scrollPosition / 2}px);
  }

  @media (max-width: 375px) {
    transform: translateX(${(props) => props.scrollPosition / 1.5}px);
  }
`;

const ThumbnailImage = styled.img`
  width: 211px;
  height: 278px;
  border-radius: 16px;
  cursor: pointer;
  flex-shrink: 0;
  opacity: ${(props) => (props.active ? "1" : "0.6")};
  transition: transform 0.5s ease, opacity 0.5s ease;
  box-shadow: ${(props) => (props.active ? "rgb(38, 57, 77) 0px 20px 30px -10px" : "none")};
  transform: ${(props) => (props.active ? "scale(1.2)" : "scale(1)")};

  /* Add the border-bottom for active image */
  border-bottom: ${(props) => (props.active ? "4px solid #0056b3" : "none")}; /* Customize color here */

  @media (max-width: 834px) {
    width: 160px;
    height: 200px;
  }

  @media (max-width: 375px) {
    width: 100px;
    height: 130px;
  }
`;

const Buttons = styled.div`
  position: absolute;
  top: 96%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 10%;
  @media (max-width: 834px) {
    top: 94%;
    width: 15%;
  }
  @media (max-width: 375px) {
    top: 91%;
    width: 20%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: white;
  color: black;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 26px;
  &:hover {
    background-color: rgba(0, 86, 179, 0.8);
  }
  @media (max-width: 834px) {
    font-size: 20px;
    padding: 8px 16px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
    padding: 6px 12px;
  }
`;