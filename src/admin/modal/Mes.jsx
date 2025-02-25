import React from "react"
import ButtonUI from "../../components/UI/ButtonUI"
import styled from "styled-components"
import { div } from "framer-motion/m"


const BtnContainer = styled.div`
    width: 300px;
    height: 170px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    position: fixed;
    left: 600px;
    top: 270px;
    z-index: 5;

    >div{
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 2;
`;


const ModalYesNo = () =>{
    return(
        <>
        <ModalBackdrop></ModalBackdrop>
        <BtnContainer>
            <h1>Delete-exactly ?</h1>
            <div>
            <ButtonUI>NO</ButtonUI>
            <ButtonUI>YES</ButtonUI>
            </div>
        </BtnContainer>

        </>
    )
}

export default ModalYesNo