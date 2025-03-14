import React, {useEffect , useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { AiOutlinePython } from "react-icons/ai";
import { SiCplusplus } from "react-icons/si";
import Line from "../../assets/images/Ellipse 2.png";
import JsText from "../../assets/icons/Фронтенд разработчик (англ. Frontend Developer) - это специалист в области веб-разработки, который занимается созданием пользовательских  (1).png";
import PyText from "../../assets/icons/Python-разработчик занимается созданием программного обеспечения на языке Python. Он разрабатывает веб-приложения, автоматизирует зада.png";
import YouBich from "../../assets/images/Group 29.png";
import Ugly from '../../assets/images/Group 29 (1).png'
import Claunch from '../../assets/images/c-language.png'
import CUper from '../../assets/images/c-sharp.png'
import QT from '../../assets/images/qt.png'
import Java from '../../assets/images/java.png'
import Scale  from '../../assets/images/scala.png'
import Tail from '../../assets/images/tailwind.png'



const Container = styled.div`

  width: 1311px;
  height: 548px;
  margin: auto;
@media (max-width: 375px){
    width: 373px;
}
  >img{
     position: absolute ;
     margin-left: -720px;
     margin-top: -180px;
     @media (max-width: 375px){
      width: 620px;
      height: 720px;
      border: 9999px;
      margin-top: -110px;
      margin-left: -310px;
     }
  }
`;

const CircleWrapper = styled.div`
  width: 360px;
  height: 360px;
  position: absolute;
  transform: translate(-50%, -50%);
  
`;

const Logo = styled(motion.div)`
  position: absolute;
  width: ${({ active }) => (active ? "88px" : "66px")};
  height: ${({ active }) => (active ? "88px" : "66px")};
  background-color: ${({ active }) => (active ? "#FF4562" : "#1A1C32")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 50px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 70px;
  margin-left: 640px;
@media (max-width: 375px){
  margin-left: 440px;
  margin-top: 125px;
  border-radius: 50%;
  width: ${({ active }) => (active ? "77px" : "60px")};
  height: ${({ active }) => (active ? "77px" : "60px")};
}
`;

const InfoPanel = styled(motion.div)`
  width: 720px;
  height: 548px;
  color: white;
  margin-left: 580px;
  @media (max-width: 375px){
    position: absolute;
    margin-top: 600px;
    margin-left: -100px;

}   

`;
const Alone = styled.div`
  width: 360px;
  height: 360px;
  box-shadow: 0px 0px 200px 0px #070f4e2e;
  background: linear-gradient(180deg, rgba(57, 144, 249, 0.15) 0%, rgba(236, 181, 255, 0.15) 100%);
  border-radius: 9999px;
  position: absolute;
  margin-top:85px;
  margin-left: 70px;

@media(max-width:375px ){
  width: 250px;
  height: 250px;
  margin-left: 18px;
  margin-top: 100px;
}
  h1 {
    color: #ffffff;
    font-size: 100px;
    font-weight: 400;
    position: absolute;
    margin-left: 145px;
    margin-top: 50px;
    @media (max-width: 375px){
      font-size: 80px;
      font-weight: 400;
      margin-left: 95px;
      margin-top: 20px;
    }
  }
  h2:nth-child(2){
    color: #9897B0;
    font-style: Corbel;
    font-size: 46px;
    font-weight: 400;   
    position: absolute;
    margin-top: 180px;
    margin-left: 60px;
    @media (max-width: 375px){
      font-size: 40px;
      font-weight: 400;
      margin-left: 22px;
      margin-top: 120px;
    }
  }
  h2:nth-child(3){
    color: #9897B0;
    font-style: Corbel;
    font-size: 46px;
    font-weight: 400;
    position: absolute;
    margin-top: 240px;
    margin-left: 130px;
    @media (max-width: 375px){
      font-size: 40px;
      font-weight: 400;
      margin-left: 79px;
      margin-top: 180px;
    }
  }
`
const H3 = styled.h3`
  position: absolute;
  font-size: 24px;
  font-weight: 400;
  margin-top: 140px;
  @media  (max-width: 375px){
    font-size: 18px;
    font-weight: 400;
    margin-top: 810px;
    margin-left: -540px;
  }
`


const techs = [
  { name: "Java Developer",
    icon: <FaJava />,
    img: [JsText], 
    images: [Scale , Java , Tail] ,
    baseStyles: { 
      img: { width: "435px", height: "140px", marginTop: "180px", marginLeft: "-290px" }, 
      images: [
        { position: "absolute", width: "230px", height: "230px", marginLeft: "-50px", marginTop: "20px" },
        { position: "absolute", width: "200px", height: "200px", marginLeft: "30px", marginTop: "190px" },
        { position: "absolute", width: "172px", height: "172px", marginTop: "370px" }
      ]
    },
    smallScreenStyles: { 
      img: {width: "330px", height: "120px" , position: "absolute " ,  marginTop: "120px" , marginLeft: "-250px" },
      images: [ 
        { width: "150px", height: "150px" , position: "absolute" , marginLeft: "-260px" , marginTop: "-80px"},
        {  width: "140px", height: "140px" ,position:  "absolute" , marginLeft: "-130px", marginTop: "-100px" },
        {  width: "120px", height: "120px" ,position:  "absolute" , marginLeft: "-10px"  , marginTop: "-50px" }
      ]
    }
  },


  
  { name: "Frontend Developer",
    icon: <FaNodeJs />,
    img: [JsText], 
    images: [YouBich] ,
    baseStyles: { 
      img: { width: "435px", height: "140px", marginTop: "180px", marginLeft: "-290px" }, 
      images: [
        { position: "absolute", width: "442px", height: "504px", marginLeft: "-140px", marginTop: "20px" }
      ]
    },
    smallScreenStyles: { 
      img: { width: "330px", height: "120px", position: "absolute" , marginLeft:"-250px" , marginTop: "240px" }, 
      images: [
        {  width: "300px", height: "340px" , position: "absolute" , marginLeft: "-250px" , marginTop: "-100px" }
      ]
    }
  },

  { name: "Python developer", 
    icon: <AiOutlinePython />, 
    img: [PyText],
    images: [Ugly],
    baseStyles: { 
      img: { width: "400px", height: "250px", marginTop: "180px", marginLeft: "-320px" }, 
      images: [
        { position: "absolute", width: "338px", height: "541px", marginLeft: "-50px", marginTop: "20px" }
      ]
    },
    smallScreenStyles: { 
      img: {width: "330px", height: "160px",  position: "absolute" , marginLeft: "-250px" , marginTop: "300px" }, 
      images: [
        {  width: "270px", height: "380px", position: "absolute" , marginLeft: "-200px" , marginTop: "-80px" }
      ]
    }
    
  },
  

   { 
    name: "C++ Developer", 
    icon: <SiCplusplus />, 
    img: [PyText], 
    images: [Claunch, CUper, QT], 
    baseStyles: { 
      img: { width: "400px", height: "250px", marginTop: "180px", marginLeft: "-320px" }, 
      images: [
        { position: "absolute", width: "230px", height: "230px", marginLeft: "-50px", marginTop: "20px" },
        { position: "absolute", width: "200px", height: "200px", marginLeft: "30px", marginTop: "190px" },
        { position: "absolute", width: "172px", height: "172px", marginTop: "370px" }
      ]
    },
    smallScreenStyles: { 
      img: {width: "330px", height: "160px" , position: "absolute " ,  marginTop: "120px" , marginLeft: "-250px" },
      images: [ 
        { width: "150px", height: "150px" , position: "absolute" , marginLeft: "-260px" , marginTop: "-80px"},
        {  width: "140px", height: "140px" ,position:  "absolute" , marginLeft: "-130px", marginTop: "-100px" },
        {  width: "120px", height: "120px" ,position:  "absolute" , marginLeft: "-10px"  , marginTop: "-50px" }
      ]
    }
  }
];

const getPositions = (width) => {
  if (width <= 375) {
    return [
      { x: -20, y: 100 },
      { x: 20, y: 180 },
      { x: -50, y: 450 },
      { x: -150, y: 470 }
    ];
  } else if (width <= 1024) {
    return [
      { x: -100, y: 180 },
      { x: -20, y: 280 },
      { x: -20, y: 450 },
      { x: -120, y: 550 }
    ];
  } else {
    return [
      { x: -75, y: 160 },
      { x: -10, y: 245 },
      { x: -10, y: 480 },
      { x: -110, y: 580 }
    ];
  }
};

const Animation = () => {
  const [positions, setPositions] = useState(getPositions(window.innerWidth));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = window.innerWidth <= 375;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 375);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 375);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 375);
      setPositions(getPositions(window.innerWidth)); // Обновляем позиции при изменении ширины
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const handleClick = (index) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }

  };
  
  return (
    <Container>
      <img src={Line} alt="" />
      <Alone>
          <h1>IT</h1>
          <h2>Профессии</h2>
          <h2>2025</h2>
      </Alone>
      <CircleWrapper>
      {techs.map((tech, index) => {
        const isActive = index === selectedIndex;
        const styles = isSmallScreen ? tech.smallScreenStyles : tech.baseStyles;
        const targetPos = isActive 
        ? (isSmallScreen ? { x: 30, y: 300 } : { x: 15, y: 350 }) 
        : positions[index];

          return (
            <Logo
            key={tech.name}
            active={isActive}
            initial={{ opacity: 1 }}
            animate={{ opacity: isActive ? 1 : 0.5, ...targetPos }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => handleClick(index)}
          >
            {tech.icon}
            </Logo>
          );
        })}
      </CircleWrapper>
      <InfoPanel>
        <H3 >{techs[selectedIndex].name}</H3>
        {techs[selectedIndex].img && techs[selectedIndex].img.map((src, index) => (
    <img key={index} src={src} alt="Текстовое описание" style={isSmallScreen ? techs[selectedIndex].smallScreenStyles.img : techs[selectedIndex].baseStyles.img} />
  ))}


  {techs[selectedIndex].images && techs[selectedIndex].images.map((src, index) => (
    <motion.img 
      key={`image-${selectedIndex}-${index}`} 
      src={src} 
      alt="Изображение"
      style={isSmallScreen ? techs[selectedIndex].smallScreenStyles.images[index] : techs[selectedIndex].baseStyles.images[index]}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}  
      animate={{ opacity: 1, scale: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }} 
    />
  ))}
      </InfoPanel>
    </Container>
  );
};


export default Animation;