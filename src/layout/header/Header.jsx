import styled, { keyframes } from "styled-components";
import itdoor from "..//..//assets/icons/it-door.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import ButtonUI from "../../components/UI/ButtonUI";
import Form from "../modal-form/ModalForm";
import Modal from "../modal-header/ModalHeader";
import { Link as ScrollLink } from "react-scroll";




const Header = () => {
    const [modal, setModal] = useState(false);
    const [burger, setBurger] = useState(false);

    const ModalformHandler = () => {
        setModal((prev) => !prev);
    };

    const BurgerModalHandler = () => {
        setBurger((prev) => !prev);
    };

    return (
        <>
            <HeaderStyled>
                <ImgStyled>
                    <img src={itdoor} alt="" />
                    <KursInformationStyled>
                        <ScrollLink to="mentor" smooth={true} duration={100}>
                            <SpanStyled>Менторы</SpanStyled>
                        </ScrollLink>

                        <ScrollLink to="adress" smooth={true} duration={100}>
                            <SpanStyled>Курсы</SpanStyled>
                        </ScrollLink>

                        <ScrollLink to="users" smooth={true} duration={100}>
                            <SpanStyled>О Нас</SpanStyled>
                        </ScrollLink>


                        <ScrollLink to="footer" smooth={true} duration={100}>
                            <SpanStyled>Контакты</SpanStyled>
                        </ScrollLink>

                    </KursInformationStyled>
                </ImgStyled>
                <ButtonStyled>
                    <ButtonUI onClick={ModalformHandler}>Войти</ButtonUI>
                </ButtonStyled>
                {burger ? (
                    <CloseIconStyled onClick={BurgerModalHandler} />
                ) : (
                    <BurgerMenuStyled onClick={BurgerModalHandler} />
                )}
            </HeaderStyled>
            {modal && <Form save={ModalformHandler} />}
            {burger ? <Modal /> : null}
        </>
    );
};

export default Header;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(-90deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
`;


const HeaderStyled = styled.header`
    width: 100%;
    height: 97px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(4, 17, 36, 1);
    color: white;
    position: fixed;
    z-index: 9999;
    @media(max-width: 375px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 97px;
        position: fixed;
        z-index: 9999;
    }

    @media(min-width: 376px) and (max-width: 834px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 97px;
        position: fixed;
        z-index: 9999;

    }
`

const KursInformationStyled = styled.div`
    width: 477px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 375px) {
        display: none;
    }
    @media(min-width: 376px) and (max-width: 834px) {
        display: none;
    }


`

const SpanStyled = styled.span`
        font-size: 18px;
        line-height: 21.74px;

        &:hover{
            color: red;
            cursor: pointer;
        }


`

const ImgStyled = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 375px) {
        width: 230px;
        >img{
            width: 67px;
            height: 22px;
        }
    }

    @media(min-width: 376px) and (max-width: 834px) {
        width: 60%;
        >img{
            width: 100px;
        }
    }


`

const CloseIconStyled = styled(MdClose)`

    @media(width: 375px){
        width: 30px;
        height: 30px;
    }


  width: 35px;
  height: 35px;
  color: white;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    color: red;
  }
`;

const BurgerMenuStyled = styled(GiHamburgerMenu)`
    display: none;

    
    @media(max-width: 375px) {
        width: 30px;
        display: block;
        animation: ${fadeIn} 0.5s ease-in-out;

        &:hover{
            border: 1px solid white;
            width: 30px;
        }
    }

    @media(min-width: 376px) and (max-width: 834px) {
        display: block;

        width: 30px;
        height: 25px;
        animation: ${fadeIn} 0.5s ease-in-out;


        &:hover{
            border: 1px solid white;
            width: 30px;
            cursor: pointer;
        }

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