import ButtonUI from "../../components/UI/ButtonUI"
import camera from "../../assets/icons/camera.png"
import styled from "styled-components"
import { div } from "framer-motion/client";
import { useState } from "react";


const ModalContainer = styled.div`
    width: 323px;
    height: 457px;
    border-radius: 20px;
    background-color: #041124;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    left: 600px;
    top: 160px;
    z-index: 4;


    >h1{
        font-size: 24px;
        color: white;
    }

`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;


const CameraContainer = styled.form`
    border: 1px solid #CECEEA;
    width: 239px;
    height: 305px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    >input{
        width: 110px;
        background-color: #041124;
        border-radius: 20px;
    }

    >img{
        width: 88px;
        height: 88px;
        border-radius: 100%;
        background: linear-gradient(71.15deg, #4E5EFA 0.74%, #F911E2 99.28%);

    }

`

const Modal = () =>{

    const [selectFile , setSelectFile] = useState(null)

    const SelectHandler = (e) =>{
        setSelectFile(e.target.files[0])
    }

    const FormHandler = async (event) =>{
        event.preventDefault()


          
    if (selectFile) {
        const formData = new FormData();
        formData.append('file', selectFile);
    
        try {
          const response = await fetch('https://your-server-url/upload', {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            console.log('Файл ийгиликтүү жүктөлдү');
          } else {
            console.error('Жүктөө ката кетти');
          }
        } catch (error) {
          console.error('Файлды жүктөө катасы:', error);
        }
      } else {
        console.log('Файл тандалган жок');
      }
  
    }

    return(
        <>
        <Backdrop></Backdrop>
        <ModalContainer>
                <h1>Добавить новый </h1>
                <CameraContainer onSubmit={FormHandler} action="">
                    <img src={camera} alt="" />
                    <input onChange={SelectHandler} type="file" />
                </CameraContainer>
                <ButtonUI type="submit">Добавить</ButtonUI>
        </ModalContainer>
        </>
    )
}

export default Modal