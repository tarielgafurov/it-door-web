import React, { useState } from 'react'; 
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import Input from './UI/Input';
import ButtonUI from './UI/ButtonUI';
import styled from 'styled-components';

const brand93Position = {
  lat: 42.878555, 
  lng: 74.618717,
};

const BISHKEK_BOUNDS = [
  [42.820, 74.560], 
  [42.900, 74.670], 
];

const CenterButton = ({ position }) => {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(position, 16, { duration: 1.5 });
  };

  return (
    <CenterButtonStyled onClick={handleClick}>
      Перейти к точку
    </CenterButtonStyled>
  );
};

const Adress = () => {
  const [zoom, setZoom] = useState(16); // Начальный зум
  const [center, setCenter] = useState(brand93Position); // Центр карты

  return (
    <DivContainer>
      <InputContainer>
        <h1><b>Связаться с нами</b></h1>
        <Input placeholder="Имя" />
        <Input placeholder="+996" type="number" />
        <ButtonUI>Отправить</ButtonUI>
      </InputContainer>

      <MapContainerDiv>
        <MapContainer
          style={{ width: '100%', height: '100%' }}
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          maxBounds={BISHKEK_BOUNDS}
          maxBoundsViscosity={1.0} 
          minZoom={12} 
          maxZoom={18} 
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker
            position={brand93Position}
            icon={L.divIcon({
              html: ReactDOMServer.renderToString(
                <div style={{ fontSize: '24px', color: 'red' }}>
                  <FaMapMarkerAlt />
                </div>
              ),
              className: '',
              iconSize: [24, 24],
              iconAnchor: [12, 24],
            })}
          >
            <Popup><b>IT-DOOR</b></Popup>
          </Marker>

          <CenterButton position={brand93Position} />
        </MapContainer>
      </MapContainerDiv>
    </DivContainer>
  );
};

export default Adress;


const DivContainer = styled.div`
  width: 1116px;
  height: 628px;
  border-radius: 16px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(57, 144, 249, 0.135);

  @media (max-width: 834px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 10px;
    border: none;
  }
`;

const InputContainer = styled.div`
  width: 335px;
  height: auto;
  border-radius: 4px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 19px;
  text-align: left;

  > h1 {
    margin-bottom: -20px;
    color: white;
    font-size: 24px;
  }

  & input {
    width: 335px;
    height: 15px;
    border-radius: 4px;
    color: white;
    border: 2px solid white;
    background-color: transparent;
    outline: none;

    &:focus {
      border: 2px solid transparent;
    }
  }

  & button {
    margin-top: 20px;
    padding: 6px 40px;
  }

  @media (max-width: 834px) {
    width: 80%;
    gap: 15px;
    margin: auto;
    align-items: center;
    padding: 16px;
    > h1 {
      font-size: 20px;
    }
    & input {
      padding: 16px;
    }
  }

  @media (max-width: 375px) {
    width: 60%;
    padding: 10px;
    margin: auto;
    align-items: center;

    > h1 { 
      font-size: 20px;
      text-align: center;
    }

    & input {
      width: 100%;
      margin: auto;
      font-size: 14px;
    }

    & button {
      padding: 6px 20px;
    }
  }
`;

const MapContainerDiv = styled.div`
  width: 50%;
  height: 100%;
  margin: 0;
  position: relative;
  overflow: hidden;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  @media (max-width: 834px) {
    width: 100%;
    height: 400px;
    border-radius: 0;
    margin-top: 15px;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 300px;
    border-radius: 0;
    margin-top: 15px;
  }
`;

const CenterButtonStyled = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background-color: #f0f0f0;
  }
`;
