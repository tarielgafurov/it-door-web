import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


const Carousel = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.offsetWidth < container.scrollWidth
    );
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const mentors = [
    { id: 1, name: "Имя фамилия", role: "FrontEnd разработчик", exp: "3 год опыт", image: "https://i.pinimg.com/736x/62/0d/f4/620df47de170e0a083cd496e310e6ce9.jpg" },
    { id: 2, name: "Имя фамилия", role: "FrontEnd разработчик", exp: "3 год опыт", image: "https://i.pinimg.com/736x/c2/e7/ca/c2e7ca10d6a37f910a0cb27287c1d3a6.jpg" },
    { id: 3, name: "Имя фамилия", role: "FrontEnd разработчик", exp: "3 год опыт", image: "https://i.pinimg.com/736x/fe/8f/04/fe8f04c374ddb3c0d31a37caee44fc03.jpg" },
    { id: 4, name: "Имя фамилия", role: "FrontEnd разработчик", exp: "3 год опыт", image: "https://i.pinimg.com/736x/42/da/94/42da94ee112a5e223b3b39db630dedb3.jpg" },
    { id: 5, name: "Имя фамилия", role: "FrontEnd разработчик", exp: "3 год опыт", image: "https://i.pinimg.com/736x/50/fe/ef/50feef506369a7a51ebd8fab83f0334f.jpg" },
    { id: 7, name: "Имя фамилия", role: "FrontEnd разработчик", exp: "3 год опыт", image: "https://i.pinimg.com/736x/8e/1d/b9/8e1db93fa2e9f1b7bc38dcc81c1cfcb1.jpg" },
    { id: 8, name: "Имя фамилия", role: "FrontEnd разработчик", exp: "3 год опыт", image: "https://i.pinimg.com/736x/91/76/56/917656feb248bda503958c14cf7e2652.jpg" }
  ];

  return (
    <Container>
      <Header>
        <h1>Наши ментора</h1>
        <Buttons>
          <Button onClick={() => scroll("left")} disabled={!canScrollLeft}><TicTok /></Button>
          <Button onClick={() => scroll("right")} disabled={!canScrollRight}><TicTak /></Button>
        </Buttons>
      </Header>
      <ScrollContainer ref={scrollContainerRef} onScroll={handleScroll}>
        {mentors.map((mentor) => (
          <Card key={mentor.id}>
            <img src={mentor.image} alt={mentor.name} />
            <Sorry>
            <h2>{mentor.name}</h2>
            <p>{mentor.role}</p>
            <p>{mentor.exp}</p>
            </Sorry>
          </Card>
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  width: 100%;
  max-width: 1425px;
  background-color: black;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
`
const Header = styled.div`
  width: 100%;
  max-width: 1115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  >h1{
    color: white;
    font-size: 32px;
    font-weight: 700;
    margin-left: 5px;
    cursor: pointer;
    @media (max-width: 260px){
    margin-left: -20px;
    }
  }
`
const Buttons = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 325px){
    width: 100px;
  }
`
const Button = styled.button`
  width: 85px;
  height: 57px;
  font-size: 16px;
  cursor: pointer;
  background: ${(props) => (props.disabled ? "#ddd" : "#1f4b99")};
  color: ${(props) => (props.disabled ? "#aaa" : "#fff")};
  border: none;
  border-radius: 16px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    background: ${(props) => (props.disabled ? "#ddd" : "#0056b3")};
  }

`
const TicTok = styled(SlArrowLeft)`
  font-size: 32px;
  font-weight: bold;
  stroke-width: 15px;
`
const TicTak = styled(SlArrowRight)`
  font-size: 32px;
  font-weight: bold;
  stroke-width: 15px;
`
const ScrollContainer = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px 0;
`
const Card = styled.div`
flex: 0 0 auto;
width: 261px;
height: 344px;
background: #f5f5f5;
border-radius: 16px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
&:hover {
  transition: transform 0.4s ease;
  transform: scale(1.05); 
}
img {
    width: 261px;
    height: 344px;
    border-radius: 16px;
    margin-bottom: 10px;
  }
`
const Sorry = styled.div`
  width: 100%;
  max-width: 261px;
  height: 88px;
  border-radius: 0 0 16px 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: -97px;
  backdrop-filter: blur(4px); 
  >h6{
    cursor: pointer;
  }
  >h2{
    color: #fffdfd;
    font-size: 18px;
    font-weight: 700;
    margin: 10px 0;
    margin-left: -100px;
    cursor: pointer;
  }
  >p:nth-child(2){
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    margin-top: -5px;
    margin-left: -59px;
    cursor: pointer;
  }
  >p:nth-child(3){
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    margin-top: -12px;
    margin-left: -145px;
    cursor: pointer;
  }
`