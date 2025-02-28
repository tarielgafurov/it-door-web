import styled from "styled-components"

const Modal = () => {
    return(
        <ParentModal>
        <ModalStyled>
            <span>Курсы</span>
            <span>Менторы</span>
            <span>О Нас</span>
            <span>Контакты</span>

        </ModalStyled>

        </ParentModal>
    )
}

export default Modal

const ParentModal = styled.div`
    width: 100%;
    height: 208px;
    display: flex;
    align-items: center;
    justify-content: end;
`

const ModalStyled = styled.div`
    border: 2px solid white;
    width: 140px;
    height: 200px;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: space-between;
    padding: 7px;
    border-radius: 10px;

    >span{
        color: white;
        font-size: 21px;
        border-bottom: 2px solid white;
        padding: 5px 0px;

        &:hover{
            color: red;
        }
    }
`