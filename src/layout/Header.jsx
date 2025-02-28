

import styled from "styled-components";
import itdoor from "..//assets/icons/it-door.png";
import { useState } from "react";
import Form from "../components/form/Form";
import ButtonUI from "../components/UI/ButtonUI";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "../components/modal/Modal";


const Header = () => {
    const [form, setForm] = useState(false);
    const [modal , setModal] = useState(false)

    const FormHandler = () => {
        setForm((prev) => !prev);
    };

    const ModalHandler = () => {
        setModal((prev) => !prev)
    }

    return (
        <>
            <HeaderStyled>
                <ImgStyled>
                    <img src={itdoor} alt="" />
                    <KursInformationStyled>
                        <span>Курсы</span>
                        <span>Менторы</span>
                        <span>О Нас</span>
                        <span>Контакты</span>
                    </KursInformationStyled>
                </ImgStyled>
                <ButtonStyled>
                    <ButtonUI onClick={FormHandler}>Войти</ButtonUI>
                </ButtonStyled>
          <BurgerMenuStyled onClick={ModalHandler}/>

            </HeaderStyled>
            {form && <Form save={FormHandler} />}
            {modal && <Modal/>}
        </>
    );
};

export default Header;

const HeaderStyled = styled.header`
    width: 100%;
    height: 97px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(4, 17, 36, 1);
    color: white;
    
    @media(max-width: 375px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 97px;
    }

    @media(min-width: 376px) and (max-width: 834px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 97px;

    }
`

const KursInformationStyled = styled.div`
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    >span{
        font-size: 18px;
        line-height: 21.74px;

        &:hover{
            color: red;
            cursor: pointer;
            border-bottom: 1px solid white;
            padding: 5px 0px;
            font-size: 19px;
        }

        &::after{
            content: " |";
            color: red;
        }
    }

    @media(max-width: 375px) {
        display: none;
    }
    @media(min-width: 376px) and (max-width: 834px) {
        display: none;
    }


`

const ImgStyled = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 375px) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: start;

        >img{
            width: 67px;
            height: 22px;
        }
    }

    @media(min-width: 376px) and (max-width: 834px) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: start;

        >img{
            width: 70px;
        }
    }


`


const BurgerMenuStyled = styled(GiHamburgerMenu)`
    display: none;

    
    @media(max-width: 375px) {
        width: 30px;
        display: block;
        &:hover{
            border: 1px solid white;
            width: 30px;
        }
    }

    @media(min-width: 376px) and (max-width: 834px) {
        display: block;
   }

`


const ButtonStyled = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: end;

    @media(max-width: 375px) {
        display: none;
    }

    @media(min-width: 376px) and (max-width: 834px) {
        display: none;
    }

`

