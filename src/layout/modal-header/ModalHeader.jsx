
import { Link } from "react-scroll";
import styled from "styled-components";

const Modal = () => {
    return (
        <ParentModal>
            <ModalStyled>
                <Link to="mentor" smooth={true} duration={100}>
                    <SpanElement>Менторы</SpanElement>
                </Link>

                <Link to="adress" smooth={true} duration={100}>
                    <SpanElement>Курсы</SpanElement>
                </Link>

                <Link to="users" smooth={true} duration={100}>
                    <SpanElement>О Нас</SpanElement>
                </Link>

                <Link to="footer" smooth={true} duration={100}>
                    <SpanElement>Контакты</SpanElement>
                </Link>
            </ModalStyled>
        </ParentModal>
    );
};

export default Modal;

const ParentModal = styled.div`
    width: 100%;
    height: 318px;
    display: flex;
    align-items: end;
    justify-content: flex-end;
    margin: auto;
`;

const ModalStyled = styled.div`
    border: 2px solid white;
    width: 140px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    background-color: rgba(4, 17, 36, 1);
    padding: 7px;
    border-radius: 10px;
    position: fixed;
    z-index: 8888;
`;

const SpanElement = styled.span`
    color: white;
    font-size: 21px;
    border-bottom: 2px solid white;
    padding: 5px 0px;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;
