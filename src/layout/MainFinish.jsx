import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ButtonUI from "../components/UI/ButtonUI";
import instagramm from "../assets/icons/instagram.png";
import whatsapp from "../assets/icons/whatsapp.png";
import telegram from "../assets/icons/telegram.png";




const StyledCanvas = styled.canvas`
  display: block;
  width: 100%;
  height: 705px;
  background-color: #041124;
  cursor: pointer;
`;
const ContentStyled = styled.div`
  width: 70%;
  height: 600px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  text-align: start;
  position: absolute;
  top: 103px;
  left: 169px;
  > span {
    text-align: start;
    color: white;
    font-size: 59px;
  }
  @media (max-width: 834px) {
    width: 100%;
    height: auto;
    top: 130px;
    left: 0;
    > span {
      font-size: 45px;
    }
  }
  @media (max-width: 375px) {
    width: 100%;
    height: auto;
    top: 120px;
    left: 0;
    > span {
      font-size: 30px;
      text-align: center;
    }
  }
`;
const Content2Styled = styled.div`
  width: 100%;
  text-align: start;
  height: 217px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  > span {
    color: white;
    font-size: 59px;
  }
  > b {
    color: white;
    font-size: 23px;
  }
  @media (max-width: 834px) {
    > span {
      font-size: 45px;
      text-align: center;
    }
    > b {
      font-size: 18px;
      text-align: center;
      margin-top: 30px;
    }
  }
  @media (max-width: 375px) {
    > span {
      font-size: 30px;
      text-align: center;
    }
    > b {
      font-size: 15px;
      text-align: center;
    }
  }
`;
const BtnStyled = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  @media (max-width: 834px) {
    width: 100%;
    height: 200px;
    margin-top: 150px;
  }
  @media (max-width: 375px) {
    height: 150px;
    margin-top: 9px;
    justify-content: center;
  }
`;
const ApplicationStyled = styled.div`
  width: 35px;
  height: 159px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 212px;
  left: 1757px;
  > a {
    > img:hover {
      width: 37px;
    }
  }
  @media (max-width: 834px) {
    top: 440px;
    left: auto;
    right: 30px;
  }
  @media (max-width: 375px) {
    top: 380px;
    left: auto;
    right: 20px;
    > a > img {
      width: 30px;
    }
  }
`;
const MainFinish = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: null, y: null });
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];
    let maxParticles;
    // Экрандын өлчөмүнө жараша түйүндөрдүн санын орнотуу
    if (window.innerWidth <= 375) {
      maxParticles = 100; // Смартфон үчүн
    } else if (window.innerWidth <= 834) {
      maxParticles = 200; // Планшет үчүн
    } else {
      maxParticles = 300; // Десктоп үчүн
    }
    const repelDistance = 400; // Чычканга жакын аралык
    const repelSpeed = 0.5; // Алыстоонун өтө жай ылдамдыгы
    // Түйүн классы
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2 + Math.random() * 2;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        this.draw();
      }
    }
    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.sqrt(
            (particles[i].x - particles[j].x) ** 2 +
              (particles[i].y - particles[j].y) ** 2
          );
          if (dist < 100) {
            if (mousePos.x !== null && mousePos.y !== null) {
              const midX = (particles[i].x + particles[j].x) / 2;
              const midY = (particles[i].y + particles[j].y) / 2;
              const mouseDist = Math.sqrt(
                (midX - mousePos.x) ** 2 + (midY - mousePos.y) ** 2
              );
              if (mouseDist < repelDistance) {
                const angle = Math.atan2(midY - mousePos.y, midX - mousePos.x);
                const repelForce =
                  (repelDistance - mouseDist) / repelDistance;
                const repelVx = Math.cos(angle) * repelForce * repelSpeed;
                const repelVy = Math.sin(angle) * repelForce * repelSpeed;
                particles[i].vx += repelVx;
                particles[i].vy += repelVy;
                particles[j].vx += repelVx;
                particles[j].vy += repelVy;
              }
            }
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
      drawLines();
      requestAnimationFrame(animate);
    }
    function createParticles(count) {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    }
    createParticles(maxParticles);
    animate();
    const handleMouseLeave = () => {
      setMousePos({ x: null, y: null });
    };
    const handleClick = () => {
      createParticles(20);
    };
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);
    return () => {
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [mousePos]);
  return (
    <>
      <StyledCanvas ref={canvasRef} />
      <ContentStyled>
        <Content2Styled>
          <span>Стань профессиональным разработчиком с нуля всего за 9 месяцев!</span>
          <b>
            Курс отлично подходит новичкам без опыта в программировании. Для
            обучения достаточно уверенно пользоваться ноутбуком и интернетом.
          </b>
        </Content2Styled>
        <BtnStyled>
          <ButtonUI>Узнать больше</ButtonUI>
        </BtnStyled>
      </ContentStyled>
      <ApplicationStyled>
        <a href="https://www.instagram.com/it_door_bishkek">
          <img src={instagramm} alt="" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=996557284628&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0">
          <img src={whatsapp} alt="" />
        </a>
        </a>
        <a href="https://t.me/+996702351009">
          <img src={telegram} alt="" />
        </a>
      </ApplicationStyled>
    </>
  );
};
export default MainFinish;