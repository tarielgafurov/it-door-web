import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { MdDeleteForever } from "react-icons/md";


const Mentors = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mentors, setMentors] = useState([]);

  const fetchMentors = async () => {
    try {
      const response = await fetch("http://157.173.121.178/api/mentor/get-all/?page=1", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      const data = await response.json();
      // console.log("Данные от API:", data);
      setMentors(data.result);
    } catch (error) {
      console.error("Ошибка загрузки менторов:", error);
    }
  };

  useEffect(() => {
    fetchMentors(); 
  
    const interval = setInterval(() => {
      fetchMentors(); 
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);



 

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
        {mentors?.map((mentor, index) => {
          // console.log("Ментор:", mentor);
          return (
            <Card key={index}>
              <img src={mentor.image} alt={mentor.name} />
              <Sorry>
                <h2>{mentor.name}</h2>
                <p>{mentor.jobTitle || "Нет должности"}</p>
                <p>{mentor.workExperience || "Нет опыта"}</p>
                
                 {/* <button onClick={() => handleDeleteMentor(mentor._id)} ><DeleteQNXY /></button>  */}
              </Sorry>
            </Card>
          );
        })}
      </ScrollContainer>
    </Container>
  );
};

export default Mentors;

const Container = styled.div`
  width: 100%;
  max-width: 1425px;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
`;
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
`;
const Buttons = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 325px){
    width: 100px;
  }
`;
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
`;
const TicTok = styled(SlArrowLeft)`
  font-size: 32px;
  font-weight: bold;
  stroke-width: 15px;
`;
const TicTak = styled(SlArrowRight)`
  font-size: 32px;
  font-weight: bold;
  stroke-width: 15px;
`;
const ScrollContainer = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px 0;
`;
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
`;
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
    margin-left: -80px;
    cursor: pointer;
  }
  >p:nth-child(2),
  >p:nth-child(3) {
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    margin-top: -5px;
    margin-left: -90px;
  }
  >p:nth-child(3) {
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    margin-top: -5px;
    margin-left: -110px;
  }
  >button{
    border: none;
    background: none;
    margin-left: 170px;
    margin-top: -50px;
  }
`;
const DeleteQNXY = styled(MdDeleteForever)`
  color: red;
  width: 27px;
  height: 27px;
`