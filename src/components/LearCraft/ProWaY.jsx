import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Line from '../../assets/images/image (1).png'


const ProWaY = () => {

  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.3,     
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 540);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 540);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <>
    <Daven>
        <Driv>
            <WordBek>
      <H1>Как проходит </H1>
      <H1Tent> учебный процесс</H1Tent>
            </WordBek>
      <Span>Учебный процесс включает в себя </Span>
       <SpanTent>3 основных принципа нашей школы</SpanTent>
        </Driv>
        <div
      style={{
        height: "100vh", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
  ref={ref}
  initial={isMobile ? {} : { x: 550, opacity: 0 }} 
  animate={isMobile ? {} : inView ? { x: 0, opacity: 1 } : { x: 400, opacity: 0 }} 
  transition={isMobile ? {} : { duration: 2, ease: "easeOut" }} 
>
    <Div>

  <JuicWrld>    
    <Daiv>
    <DivWord>
      <h1>1</h1>
    </DivWord>
    <UpLes>
    <h1>Упор на практику</h1>
    <span>Более 80% обучения - работа над проектами,
много практики и оформление реального
портфолио</span>
    </UpLes>
    </Daiv>
     <Img src={Line} alt="" /> 

    <DaivWrds>
    <DivWrds>
      <h1>2</h1>
    </DivWrds>
    <UpLesWrds>
    <h1>Поддержка и внимание</h1>
    <span>Мы формируем небольшие группы до 12
человек, в каждой группе есть основной
преподаватель и ассистент.</span>
    </UpLesWrds>
    </DaivWrds>
    <ImgWrds src={Line} alt="" />

    <DaivWrld>
    <DivWrld>
      <h1>3</h1>
    </DivWrld>
    <UpLesWrld>
    <h1>Реальные проекты</h1>
    <span>Наши студенты разрабатывают качественные
    проекты: веб-сайты, приложения,</span> <span>телеграм боты</span>
    </UpLesWrld>
    </DaivWrld>

  </JuicWrld>    
    </Div>
      </motion.div>
    </div>
    </Daven>
    </>
  )
}

export default ProWaY;


const JuicWrld = styled.div`
  width: 1041.67px;
  height: 236px;
  margin-top: -340px;
  @media (max-width: 1222px){
    margin-top: -300px;
  }
  @media (max-width: 1024px){
    margin-top: -290px;
  }
  @media (max-width: 912px){
  margin-top: -600px;
}
@media (max-width: 853px){
  margin-top: -600px;
}
@media (max-width: 834px){
  margin-top: -300px;
}
@media (max-width: 820px){
  width: 950px;
  margin-top: -550px;
}
@media (max-width: 768px){
  width: 768px;
  margin-top: -450px;
}

@media (max-width: 540px){
  width: 373px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: -90px;
  margin-left: 335px;
}
@media (max-width: 430px){
  width: 373px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: -265px;
  margin-left: 335px;
}
@media (max-width: 412px){
    margin-top: -260px;
  }
  @media (max-width: 375px){
    margin-top: -100px;
  }
@media (max-width: 360px){
    margin-top: -100px;
  }
  @media (max-width: 344px){
    margin-top: -250px;
  }
`


const Daven = styled.div`
    width: 1041.67px;
    height: 404px;
    margin: auto;
    margin-top: 50px;
    @media (max-width: 912px){
    width: 834px;
    height: 404px;
}
@media (max-width: 853px){
    width: 834px;
    height: 404px;
}
@media (max-width: 834px){
    width: 834px;
    height: 404px;
}
@media (max-width: 768px){
    width: 834px;
    height: 404px;
}
@media (max-width: 540px){
    width: 373px;
    height: 1340px;
    position: relative;
  overflow: hidden;
  margin-top: -14px;
}
@media (max-width: 430px){
    width: 373px;
    height: 1340px;
    
  margin-top: -14px;
}
`

const Driv = styled.div`
    width: 626.11px;
    height: 98px;
    position: relative;
    margin: auto;
    top: 20px;
    /* @media (max-width: 912px){
      margin-left: 10px;
    } */
  @media (max-width: 540px){
    width: 100%;
    height: 100px;
    margin-top: 0px;
    word-wrap: break-word;
  word-break: break-word;
   hyphens: auto; 
  }
  @media (max-width: 430px){
    width: 100%;
    height: 100px;
    margin-top: 0px;
    word-wrap: break-word;
  word-break: break-word;
   hyphens: auto; 
  }
`
const WordBek = styled.div`
    width: 626.11px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const H1 = styled.h1`
    color: white;
    font-size: 39.38px;
    font-weight: 700;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-top: -1px;
    cursor: pointer;
@media (max-width: 540px){
    position: absolute;
    left: 62px;
    margin-top:0px;
  }
  @media (max-width: 430px){
    position: absolute;
    left: 62px;
    margin-top:0px;
  }
  @media (max-width: 360px){
    left: 60px;
}
@media (max-width: 340px){
  margin-top: 20px;
  left: 15px;
}
`
const H1Tent = styled.h1`
    color: white;
    font-size: 39.38px;
    font-weight: 700;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-top: -1px;
    cursor: pointer;
@media (max-width: 540px){
    position: absolute;
    left: 40px;
    font-size: 35.35px;
    margin-top: 80px;
}
@media (max-width: 430px){
    position: absolute;
    left: 40px;
    font-size: 35.35px;
    margin-top: 80px;
}
@media (max-width: 360px){
  font-size: 30px;
  margin-top: 100px;
  left: 60px;
}
@media (max-width: 340px){
  margin-top: 145px;
  left: 15px;
}
`

const Span = styled.span`
    color:#B1B1B5;
    font-size: 16.88px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    cursor: pointer;
@media (max-width: 540px){
    position: absolute;
    margin-top: 40px;
    left: 55px;
}
@media (max-width: 430px){
    position: absolute;
    margin-top: 40px;
    left: 55px;
}
@media (max-width: 390px){
    margin-top: 30px;
  left: 52px;
}
@media (max-width: 360px){
  left: 55px;
}
@media (max-width: 340px){
  margin-top: 75px;
  left: 8px;
}
`
const SpanTent = styled.span`
    color:#B1B1B5;
    font-size: 16.88px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    cursor: pointer;
@media (max-width: 540px){
    position: absolute;
    margin-top: 65px;
    left: 50px;
}
@media (max-width: 430px){
    position: absolute;
    margin-top: 65px;
    left: 50px;
}
@media (max-width: 390px){
    margin-top: 50px;
  left: 52px;
}
@media (max-width: 360px){
  left: 50px;
}
@media (max-width: 340px){
  margin-top:105px;
  left: 5px;
}
`

const Div = styled.div`
    width: 1041.67px;
    height: 236px;
`


const Img = styled.img`
    position: absolute;
    margin-top: -206.97px;
    margin-left: -275px;
    @media (max-width: 912px){
      margin-left: -220px;
    }
@media (max-width: 853px){
  margin-left: -225px;
  width: 150px;
}
@media (max-width: 834px){
  margin-left: -225px;
  width: 150px;
}
@media (max-width: 820px){
    margin-left: -185px;
    width: 150px;
}
@media (max-width: 768px){
  margin-left: -100px;
  width: 140px;
}
@media (max-width: 540px){
    transform: rotate(90deg); 
    transform-origin: center; 
    margin: auto;
    margin-top: 210px;
}
@media (max-width: 430px){
    transform: rotate(90deg); 
    transform-origin: center; 
    margin: auto;
    margin-top: 210px;
}
`


const UpLes = styled.div`
    width: 298.75px;
    height: 112px;
    margin-top: 50px;
    @media (max-width: 912px){
      width: 250px;
      margin-left: 10px;
    }
    @media (max-width: 853px){
      width: 250px;
      margin-left: 10px;
    }
    @media (max-width: 834px){
      width: 250px;
      margin-left: 10px;
    }
    @media (max-width: 768px){
      width: 250px;
      margin-left: 10px;
    }
    >h1{
      font-size: 19px;
      font-weight: 700;
      color: #F3F4F8;
      margin-top: -4px;
      cursor: pointer;
      @media (max-width: 540px){
        font-size: 25px;
      }
      @media (max-width: 430px){
        font-size: 25px;
      }
    }
    >span{
      color: #B1B1B5;
      font-size: 12.12px;
      font-weight: 400;
      margin: auto;
      margin-top: 4px;
      margin-left: 3px;
      cursor: pointer;
      @media (max-width: 912px){
        width: 60%;
      }
      @media (max-width: 853px){
        width: 60%;
      }
      @media (max-width: 834px){
        width: 60%;
      }
      @media (max-width: 768px){
        width: 60%;
      }
      @media (max-width: 540px){
        font-size: 17px;
      }
      @media (max-width: 430px){
        font-size: 17px;
      }
    }
    `

const Daiv = styled.div`
    width: 298.75px;
    height: 236px;
    @media (max-width: 912px){
        margin-left: 80px;
        width: 260px;
    }
    @media (max-width: 853px){
        margin-left: 80px;
        width: 260px;
    }
    @media (max-width: 834px){
        margin-left: 80px;
        width: 260px;
    }
    @media (max-width: 768px){
        margin-left: 80px;
        width: 260px;
    }
@media (max-width: 540px){
    
    margin: auto;
    position: absolute;
    margin-top: -120px;
}
@media (max-width: 430px){
    
    margin: auto;
    position: absolute;
    margin-top: -120px;
}
`

const DivWord = styled.div`
    width: 97.91px;
    height: 74px;
    border-radius: 24px;
    background-color: #2185D9;
    margin-left: 100.31px;
    transition: 0.7s ease;
    &:hover{
      transform: scale(1.3);
    }
    >h1{
      position: absolute;
      color: white;
      font-variant-numeric: tabular-nums;
      font-weight: 700;
      font-size: 25px;
      margin-left: 41px;
      cursor: pointer;
    }
    @media (max-width: 912px) {
        margin-left: 90px;
        &:hover{
          transform: scale(1.3);
        }
    }
    @media (max-width: 853px) {
        margin-left: 90px;
        &:hover{
          transform: scale(1.3);
        }
    }
    @media (max-width: 834px) {
        margin-left: 90px;
        &:hover{
          transform: scale(1.3);
        }

    }
    @media (max-width: 768px) {
        margin-left: 90px;
        &:hover{
          transform: scale(1.3);
        }
        
    }
    `

const ImgWrds = styled.img`
    position: absolute;
    margin-left: 141px;
    margin-top: -206.97px;
    margin-left: 110px;
    @media (max-width: 1024px){
    margin-left: 70px;
  }
  @media (max-width: 912px){
    margin-left: 90px;
  }
    @media (max-width: 853px){
      width: 150px;
      margin-left: 75px;
    }
    @media (max-width: 834px){
      width: 150px;
      margin-left: 75px;
    }
    @media (max-width: 820px){
      width: 150px;
      margin-left: 125px;
    }
    @media (max-width: 768px){
      width: 140px;
      margin-left: 175px;
    }
    @media (max-width: 540px){
      transform: rotate(90deg); 
      transform-origin: center; 
      margin: auto;
      position: absolute;
      margin-top: 680px;
    }
    @media (max-width: 430px){
      transform: rotate(90deg); 
      transform-origin: center; 
      margin: auto;
      position: absolute;
      margin-top: 680px;
    }
`


const UpLesWrds = styled.div`
    width: 298.75px;
    height: 112px;
    margin-top: 50px;
    @media (max-width: 912px){
      
      width: 240px;
      margin-left: 10px;
    }
    @media (max-width: 853px){
      
      width: 240px;
      margin-left: 10px;
    }
    @media (max-width: 834px){
      
      width: 240px;
      margin-left: 10px;
    }
    @media (max-width: 768px){
      
      width: 240px;
      margin-left: 10px;
    }
    >h1{
        font-size: 19px;
        font-weight: 700;
        color: #F3F4F8;
        margin-top: -4px;
        cursor: pointer;
        @media (max-width: 540px){
        font-size: 25px;
      }
      @media (max-width: 430px){
        font-size: 25px;
      }
    }
    
    >span{
        color: #B1B1B5;
        font-size: 12.12px;
        font-weight: 400;
        margin-top: 4px;
        margin-left: 3px;
        cursor: pointer;
        @media (max-width: 540px){
        font-size: 17px;
      }
      @media (max-width: 430px){
        font-size: 17px;
      }
    }
`


const DaivWrds = styled.div`
    width: 298.75px;
    height: 236px;
    margin-left: 364.28px;
    margin-top: -235.6px;
    @media  (max-width: 912px){
      margin-left:410px;
    }
@media (max-width: 853px){
 
  width: 260px;
  margin-left: 390px;
}
@media (max-width: 834px){
 
 width: 260px;
 margin-left: 390px;
}
@media (max-width: 768px){
 
 width: 260px;
 margin-left: 360px;
}
@media (max-width: 540px){
   
    width: 300px;
    height: 255px;
    margin: auto;
    margin-top: 310px;
    margin-left: 55px;

}
@media (max-width: 430px){
   
   width: 300px;
   height: 255px;
   margin: auto;
   margin-top: 310px;
   margin-left: 55px;

}
`

const DivWrds = styled.div`
    width: 97.91px;
    height: 74px;
    border-radius: 24px;
    background-color: #991516;
    margin-left: 100.31px;
    transition: 0.7s ease;
    &:hover{
      transform: scale(1.3);
    }
    >h1{
        position: absolute;
        color: white;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
        font-size: 25px;
        margin-left: 40px;
        cursor: pointer;
    }
    @media (max-width: 912px){
      margin-left: 80px;
    }
    @media (max-width: 853px){
      margin-left: 80px;
    }
    @media (max-width: 834px){
      margin-left: 80px;
    }
    @media (max-width: 768px){
      margin-left: 80px;
    }
`

const UpLesWrld = styled.div`
    width: 298.75px;
    height: 112px;
    margin-top: 50px;
    @media (max-width: 912px){
    width: 260px;
  }
  @media (max-width: 853px){
    width: 260px;
  }
  @media (max-width: 834px){
    width: 260px;
  }
  @media (max-width: 768px){
    width: 260px;
  }
    @media (max-width: 540px){
      width: 319.03px;
      height: 88px;
    }
    @media (max-width: 430px){
      width: 319.03px;
      height: 88px;
    }
    >h1{
        font-size: 19px;
        font-weight: 700;
        color: #F3F4F8;
        margin-top: -4px;
        cursor: pointer;
        @media (max-width: 540px){
        font-size: 25px;
      }
      @media (max-width: 430px){
        font-size: 25px;
      }
    }
    >span{
        color: #B1B1B5;
        font-size: 12.02px;
        font-weight: 400;
        line-height: 24px;
        margin-top: 4px;
        margin-left: 3px;
        cursor: pointer;
        @media (max-width: 540px){
        font-size: 17px;
      }
      @media (max-width: 430px){
        font-size: 17px;
      }
    }

`

const DaivWrld = styled.div`
    width: 319.03px;
    height: 212px;
    margin-left: 737.16px;
    margin-top: -235.6px;
    @media (max-width: 1024px){
      margin-left: 700px;
  }
  @media (max-width: 912px){
    margin-left: 720px;
  }
    @media (max-width: 853px){
      width: 240px;
      height: 240px;
      margin-left: 695px;
    }
    @media (max-width: 834px){
      width: 240px;
      height: 240px;
      margin-left: 695px;
    }
    @media (max-width: 768px){
      width: 240px;
      height: 240px;
      margin-left: 635px;
    }
@media (max-width: 540px){
    width: 320px;
    height: 240px;
    position: absolute;
  margin: auto;
  margin-top: 800px;
}
@media (max-width: 430px){
    width: 320px;
    height: 240px;
    position: absolute;
  margin: auto;
  margin-top: 800px;
}
`

const DivWrld = styled.div`
    width: 97.91px;
    height: 74px;
    border-radius: 24px;
    background-color: #F1973D;
    margin-left: 101.31px;
    transition: 0.7s ease;
    @media (max-width: 912px){
      margin-left: 90px;
    }
    @media (max-width: 853px){
      margin-left: 90px;
    }
    @media (max-width: 834px){
      margin-left: 90px;
    }
    @media (max-width: 768px){
      margin-left: 90px;
    }
    @media (max-width: 540px){
    margin-left: 108px;
  }
  @media (max-width: 430px){
    margin-left: 108px;
  }
    &:hover{
      transform: scale(1.3);
    }
    >h1{
        position: absolute;
        color: white;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
        font-size: 25px;
        margin-left: 40px;
        cursor: pointer;
    }
`