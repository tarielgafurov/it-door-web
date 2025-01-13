import React from 'react';
import styled from 'styled-components';

const Study = () => {
  const data = [
    { id: 1, title: 'Занятия', description: 'Занятия проходят 6 раз в неделю 3 дня уроки 3 дня практика.' },
    { id: 2, title: 'Занятия', description: 'Преподаватель объясняет теоретический материал (например, основы синтаксиса языка, работу алгоритмов).' },
    { id: 3, title: 'Занятия', description: 'Занятие полностью посвящено работе над проектом.' },
    { id: 4, title: 'Занятия', description: 'Учащиеся делятся на пары и работают над одним заданием, чередуясь в написании кода.	Это помогает развивать навыки работы в команде.' },
    { id: 5, title: 'Занятия', description: 'Несколько занятий подряд посвящены разработке полноценных проектов (например, создание веб-приложения или игры).' },
    { id: 6, title: 'Занятия', description: 'В рамках занятия участники делятся на команды и решают задачи в ограниченное время.	В конце сравниваются результаты, обсуждаются подходы и решения.' },
  ];

  return (
    <Wrapper>
      <Title>Как проходит обучение</Title>
      <DivContainerWrapper>
        {data.map(({ id, title, description }) => (
          <Card key={id}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>{id}</div>
          </Card>
        ))}
      </DivContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1116px;
  margin: auto;
  padding: 20px;
  background-color: rgba(4, 17, 36, 1);

  @media (max-width: 834px) {
    width: 90%;
  }

  @media (max-width: 375px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  text-align: left;

  @media (max-width: 834px) {
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: 375px) {
    font-size: 24px;
    text-align: center;
  }
`;

const DivContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;


const Card = styled.div`
  background: #3990F922;
  color: #ffffff;
  border-radius: 8px;
  position: relative;
  padding: 20px;
  height: 180px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgb(255, 255, 255);
  }

  > h1 {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 10px;
    transition: color 0.3s ease;

    @media (max-width: 834px) {
      font-size: 16px;
    }

    @media (max-width: 375px) {
      font-size: 17px;
    }
  }

  &:hover > h1 {
    color: #4a90e2;
  }

  > p {
    width: 207px;
    height: 120px;
    font-size: 14px;
    line-height: 1.5;
    color: white;
    text-align: left;
    overflow-y: auto;
    padding-right: 5px;

    ::-webkit-scrollbar {
      width: 8px; 
    }

    ::-webkit-scrollbar-track {
      background: transparent; 
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(74, 144, 226, 0.6);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(74, 144, 226, 0.8); 
    }

    scrollbar-width: thin;
    scrollbar-color: rgba(74, 144, 226, 0.6) transparent;

    @media (max-width: 834px) {
      font-size: 12px;
      width: 100%;
    }

    @media (max-width: 375px) {
      font-size: 14px;
      width: 100%;
    }
  }

  > div {
    position: absolute;
    font-size: 180px;
    color: rgba(74, 144, 226, 0.2);
    bottom: -35px;
    right: 10px;
    transition: color 0.3s ease;

    @media (max-width: 834px) {
      font-size: 140px;
      bottom: -25px;
    }

    @media (max-width: 375px) {
      font-size: 100px;
      bottom: -20px;
    }
  }

  &:hover > div {
    color: rgba(74, 144, 226, 0.4);
  }
`;


export default Study;
