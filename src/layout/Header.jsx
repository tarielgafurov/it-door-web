import styled from "styled-components"
import itdoor from "..//assets/icons/it-door.png"
import { GiHamburgerMenu } from "react-icons/gi";
import ButtonUI from "../components/UI/ButtonUI";


const Header = () =>{
    return(
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
                <ButtonUI>Войти</ButtonUI>
            </ButtonStyled>
                <BurgerMenuStyled />
        </HeaderStyled>
    )
}

export default Header



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
    width: 377px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >span{
        font-size: 18px;
        line-height: 21.74px;

        &:hover{
            color: red;
            cursor: pointer;
        }
    }

    @media(max-width: 375px) {
        display: none;
    }
    @media(min-width: 376px) and (max-width: 834px) {
        >span{
            font-size: 16px;
        }
    }


`

const ImgStyled = styled.div`
    width: 648px;
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
        >img{
            width: 100px;
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
        display: none;
   }

`


const ButtonStyled = styled.div`
    width: 250px;
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