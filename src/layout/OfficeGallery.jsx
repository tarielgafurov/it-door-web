import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";


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
`;
const ThumbnailImage = styled.img`
  width: 211px;
  height: 278px;
  border-radius: 16px;
  cursor: pointer;
  flex-shrink: 0;
  opacity: ${(props) => (props.active ? "1" : "0.6")};
  transition: transform 2s, opacity 2s;
  box-shadow: ${(props) => (props.active ? "rgb(38, 57, 77) 0px 20px 30px -10px" : "none")};
  transform: ${(props) => (props.active ? "scale(1.1)" : "scale(1)")};
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
function OfficeGallery() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://d1di04ifehjy6m.cloudfront.net/media/filer_public/67/ca/67cac7fa-1853-4f1d-95ed-db1ed6b38ec5/adobestock_212026013_2.png",
    "https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?cs=srgb&dl=pexels-atbo-66986-245240.jpg&fm=jpg",
    "https://t4.ftcdn.net/jpg/05/14/20/47/360_F_514204772_mT0EpTdZkScyiRPn2PInaKaqd88QGrzE.jpg",
    "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2024/01/Luxury-office-trends-by-Decorilla-scaled.jpeg?width=900"
  ];
  const thumbnailWidth = 230; 
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animate, setAnimate] = useState(false);
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
        ? -thumbnailWidth * (images.length - 1) 
        : scrollPosition - direction * thumbnailWidth;
    setScrollPosition(newScrollPosition);
  };
  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 600); 
  };
  return (
    <Container>
      <OurOfficeStyled>
        <h1>Наш офис</h1>
      </OurOfficeStyled>
      <ImageWrapper>
        <MainImage
          src={selectedImage}
          alt="Main"
          className={animate ? "scale-in" : ""}
        />
        <GalleryContainer>
          <Thumbnails scrollPosition={scrollPosition}>
            {images.map((img, index) => (
              <ThumbnailImage
                key={index}
                src={img}
                active={img === selectedImage}
                onClick={() => handleThumbnailClick(img, index)}
              />
            ))}
          </Thumbnails>
        </GalleryContainer>
        <Buttons>
          <Button onClick={() => handleNavigation(-1)}><BsChevronLeft/></Button>
          <Button onClick={() => handleNavigation(1)}><BsChevronRight/></Button>
        </Buttons>
      </ImageWrapper>
    </Container>
  );
}
export default OfficeGallery;