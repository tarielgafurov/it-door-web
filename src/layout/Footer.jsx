import React from "react";
import styled from "styled-components";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <Title>IT-DOOR</Title>
      <Description>
      курсы по программированию — интенсивные курсы ускоренного обучения IT-специальностям по разработке программного обеспечения. Впервые они появились в 2022 году. Они помогают новичкам быстро освоиться в мире технологий, получить первые профессиональные навыки и найти работу.
      </Description>
      <LinksContainer>
        <Link>Курсы</Link>
        <Link>Менторы</Link>
        <Link href="#about">О Нас</Link>
        <Link href="#contacts">Контакты</Link>
      </LinksContainer>
      <IconsContainer>
        <Link href="https://www.instagram.com/it_door_bishkek"><FaInstagram style={{ fontSize: "24px", cursor: "pointer" }} /></Link>
        <Link href="https://api.whatsapp.com/send/?phone=996557284628&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0"> <FaWhatsapp   style={{ fontSize: "24px", cursor: "pointer" }} /> </Link>
        <Link href="https://t.me/+996702351009"><FaTelegram style={{ fontSize: "24px", cursor: "pointer" }} /></Link>
      </IconsContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: rgba(4, 17, 36, 1);
  color: white;
  text-align: center;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 834px) {
    height: auto;
    gap: 30px;
  }

  @media (max-width: 375px) {
    gap: 20px;
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;

  @media (max-width: 834px) {
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

const Description = styled.span`
  width: 55%;
  font-size: 14px;
  margin: 0;

  @media (max-width: 834px) {
    font-size: 12px;
  }

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 834px) {
    gap: 15px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 834px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 834px) {
    gap: 10px;
  }

  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export default Footer;


