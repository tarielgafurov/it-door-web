
import React, { useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  border: 2px solid red;

  /* Media query for smaller screens */
  @media (max-width: 834px) {
    border: none; /* Remove the red border */
  }
`;

const Main = styled(FancyCarousel)`
  border: 2px solid black;
  background-color: red;

  /* Media query for smaller screens */
  @media (max-width: 834px) {
    border: none; /* Remove the black border */
  }
`;

const MainContainer = styled.div`
  border: 2px solid red;
  position: absolute;
  top: 80px;
  left: 80px;

  /* Media query for smaller screens */
  @media (max-width: 834px) {
    top: 50px;
    left: 10px;
    width: 100%;
    height: 100%;
  }
`;

const InfoBoxWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 650px;
  background-color: red;
  padding: 20px;
  width: 350px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;

  /* Media query for smaller screens */
  @media (max-width: 834px) {
    top: 70px;
    left: 10px;
    width: 100%;
    font-size: 16px;
    padding: 15px;
  }

  @media (max-width: 375px) {
    top: 10px; /* Adjust for very small screens */
    left: 10px;
    font-size: 14px;
    padding: 10px;
  }
`;

const Carousel = () => {
  const [focusElement, setFocusElement] = useState(0);

  const images = [
    "https://p7.hiclipart.com/preview/142/145/79/node-js-computer-icons-javascript-software-development-kit-precise-360.jpg", // Java
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnvf_1Z0HaC5wsiHq7MALQz6i5SJ380U9lA&s", // Python
    "https://i.pinimg.com/736x/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.jpg", // Frontend
    "https://cdn.edflex.com/media/uploads/mooc/logo/9aeb51dc22ec4d7b0ac28deed572f1d20d13ac15.png?width=360&height=200", // Full Stack
  ];

  const info = [
    "🟢 Java Backend\n\nJava - это один из самых популярных языков программирования для серверной разработки. Он используется для создания надежных, масштабируемых и безопасных веб-приложений. Часто применяется в банковской сфере и корпоративных системах.",
    
    "🔵 Python Backend\n\nPython широко используется в веб-разработке благодаря своей простоте и гибкости. Django и Flask - два популярных фреймворка для бекенда, которые позволяют быстро создавать мощные веб-приложения.",
    
    "🟡 Frontend\n\nФронтенд-разработка отвечает за пользовательский интерфейс. HTML, CSS и JavaScript (с React, Vue или Angular) позволяют создавать удобные и современные веб-сайты и приложения.",
    
    "🟠 Full Stack\n\nFull Stack разработчики владеют как фронтендом, так и бекендом. Они могут создавать весь цикл разработки, от пользовательского интерфейса до серверной логики и баз данных.",
  ];

  return (
    <CarouselContainer>
      <MainContainer>
        <Main
          images={images}
          setFocusElement={setFocusElement}
          carouselRadius={250}
          peripheralImageRadius={50}
          centralImageRadius={50}
          focusElementStyling={{ border: "2px solid #ba4949" }}
          autoRotateTime={2}
          borderWidth={4}
          borderHexColor={"1c364f"}
        />
        <InfoBoxWrapper>
          <p>{info[focusElement]}</p>
        </InfoBoxWrapper>
      </MainContainer>
    </CarouselContainer>
  );
};

export default Carousel;


// import React, { useState } from "react";
// import FancyCarousel from "react-fancy-circular-carousel";
// import "react-fancy-circular-carousel/FancyCarousel.css";
// import styled from "styled-components";

// const CarouselContainer = styled.div`
//   width: 100%;
//   border: 2px solid red;
// `;

// const Main = styled(FancyCarousel)`
//   border: 2px solid black;
//   background-color: red;
// `;

// const MainContainer = styled.div`
// border: 2px solid red;
//   position: absolute;
//   top: 80px;
//   left: 80px;
// `;

// const InfoBoxWrapper = styled.div`
//   position: absolute;
//   top: 100px;
//   left: 650px; /* Маалыматтар оң жакта чыгышы үчүн */
//   background-color: red;
//   padding: 20px;
//   width: 350px;
//   color: white;
//   font-size: 18px;
//   font-weight: bold;
//   text-align: center;
//   border-radius: 10px;
// `;

// const Carousel = () => {
//   const [focusElement, setFocusElement] = useState(0);

//   const images = [
//     "https://p7.hiclipart.com/preview/142/145/79/node-js-computer-icons-javascript-software-development-kit-precise-360.jpg", // Java
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnvf_1Z0HaC5wsiHq7MALQz6i5SJ380U9lA&s", // Python
//     "https://i.pinimg.com/736x/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.jpg", // Frontend
//     "https://cdn.edflex.com/media/uploads/mooc/logo/9aeb51dc22ec4d7b0ac28deed572f1d20d13ac15.png?width=360&height=200", // Full Stack
//   ];

//   const info = [
//     "🟢 Java Backend\n\nJava - это один из самых популярных языков программирования для серверной разработки. Он используется для создания надежных, масштабируемых и безопасных веб-приложений. Часто применяется в банковской сфере и корпоративных системах.",
    
//     "🔵 Python Backend\n\nPython широко используется в веб-разработке благодаря своей простоте и гибкости. Django и Flask - два популярных фреймворка для бекенда, которые позволяют быстро создавать мощные веб-приложения.",
    
//     "🟡 Frontend\n\nФронтенд-разработка отвечает за пользовательский интерфейс. HTML, CSS и JavaScript (с React, Vue или Angular) позволяют создавать удобные и современные веб-сайты и приложения.",
    
//     "🟠 Full Stack\n\nFull Stack разработчики владеют как фронтендом, так и бекендом. Они могут создавать весь цикл разработки, от пользовательского интерфейса до серверной логики и баз данных.",
    
    
//   ];

//   return (
//     <CarouselContainer>
//       <MainContainer>
//         <Main
//           images={images}
//           setFocusElement={setFocusElement}
//           carouselRadius={250}
//           peripheralImageRadius={50}
//           centralImageRadius={50}
//           focusElementStyling={{ border: "2px solid #ba4949" }}
//           autoRotateTime={2}
//           borderWidth={4}
//           borderHexColor={"1c364f"}
//         />
//         <InfoBoxWrapper>
//           <p>{info[focusElement]}</p>
//         </InfoBoxWrapper>
//       </MainContainer>
//     </CarouselContainer>
//   );
// };

// export default Carousel;

// import React, { useState } from "react";

// import FancyCarousel from "react-fancy-circular-carousel";
// import "react-fancy-circular-carousel/FancyCarousel.css";
// import image1 from "..//..//assets/icons/Group 14.png";
// import image2 from "..//..//assets/icons/Group 15.png";
// import image3 from "..//..//assets/icons/Group 16.png";
// import image4 from "..//..//assets/icons/Group 17.png";
// import styled from "styled-components";


// const CarouselContainer = styled.div`
    
// `

// const Main = styled(FancyCarousel)`
//     border: 2px solid black;
//     background-color: red;
// `

// const MainContainer = styled.div`
//   position: absolute;
//   top: 80px;
//   left: 80px;
// `

// const InfoBoxWrapper = styled.div`
//   position: relative;
//   top: -300px;
//   left: 800px;
//   background-color: red;
//   padding: 10px;
//   width: 500px;
// `


// const Carousel = () => {
//   const [focusElement, setFocusElement] = useState(0);
//   const images = ["https://p7.hiclipart.com/preview/142/145/79/node-js-computer-icons-javascript-software-development-kit-precise-360.jpg", 
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnvf_1Z0HaC5wsiHq7MALQz6i5SJ380U9lA&s", "https://i.pinimg.com/736x/93/42/1e/93421e8db0859ecb02642b9b5f59aa5d.jpg",
//     "https://cdn.edflex.com/media/uploads/mooc/logo/9aeb51dc22ec4d7b0ac28deed572f1d20d13ac15.png?width=360&height=200"];
//   const info = ["Python-developer", "Java-developer", "Frontend-developer", "Backend-developer"];
//   return (
//     <CarouselContainer>
//       <MainContainer>
//         <Main
//           images={images}
//           setFocusElement={setFocusElement}
//           carouselRadius={250}
//           peripheralImageRadius={50}
//           centralImageRadius={50}
//           focusElementStyling={{ border: "2px solid #ba4949"}}
//           autoRotateTime={2}
//           borderWidth={2}
//           borderHexColor={"1c364f"}
        
//         />
//         <InfoBoxWrapper>
//           <p> {info[focusElement]} </p>
//         </InfoBoxWrapper>
//       </MainContainer>
//     </CarouselContainer>
//   );
// };

// export default Carousel;