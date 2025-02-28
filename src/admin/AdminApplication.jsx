import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonUI from "../components/UI/ButtonUI";

const Modal = ({ onClose, onConfirm }) => (
  <ModalOverlay>
    <ModalContent>
      <h2>Вы точно хотите удалить?</h2>
      <div>
        <ButtonUI onClick={onConfirm}>Да</ButtonUI>
        <ButtonUI onClick={onClose}>Нет</ButtonUI>
      </div>
    </ModalContent>
  </ModalOverlay>
);

const AdminApplication = () => {
    const [applications, setApplications] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentDeleteId, setCurrentDeleteId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://157.173.121.178/api/request/get-all/?page=1");
                const data = await response.json();
                console.log("Полученные заявки:", data.result);
                setApplications(data.result || []);
            } catch (error) {
                console.error("Ошибка при загрузке данных", error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async () => {
        if (!currentDeleteId) {
            console.error("Ошибка: ID заявки не найден!");
            return;
        }

        console.log(`Удаление заявки с ID: ${currentDeleteId}`);

        try {
            const response = await fetch(`http://157.173.121.178/api/request/delete/${currentDeleteId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                console.log(`Успешно удалена заявка с ID ${currentDeleteId}`);
                setApplications((prev) => prev.filter((app) => app.id !== currentDeleteId && app._id !== currentDeleteId));
                setIsModalOpen(false); 
            } else {
                console.error(`Ошибка при удалении. Код ответа: ${response.status}`);
                const errorText = await response.text();
                console.error("Ответ сервера:", errorText);
            }
        } catch (error) {
            console.error("Ошибка сети при удалении", error);
        }
    };

    const openModal = (id) => {
        setCurrentDeleteId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentDeleteId(null);
    };

    return (
        <ParentStyled>
            <TipsStyled>
                <h1>
                    <b>Заявки</b>
                </h1>
                <div>
                    <h1>№</h1>
                    <h1>Имя</h1>
                    <h1>Номер</h1>
                    <h1>Удаление</h1>
                </div>
            </TipsStyled>
            {applications.length > 0 ? (
                applications.map((el, index) => {
                    console.log("Данные заявки:", el);
                    return (
                        <ApplicationStyled key={el.id || el._id || index}>
                            <h1>{index + 1}</h1>
                            <h1>{el.name}</h1>
                            <h1>{el.phone}</h1>
                            <ButtonUI onClick={() => openModal(el.id || el._id)}>
                                Удалить
                            </ButtonUI>
                        </ApplicationStyled>
                    );
                })
            ) : (
                <h2>Заявок пока нет</h2>
            )}

            {isModalOpen && (<Modal onClose={closeModal} onConfirm={handleDelete} /> )}
        </ParentStyled>
    );
};

export default AdminApplication;

const ParentStyled = styled.div`
    max-width: 90%;
    width: 1092px;
    color: white;
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const ApplicationStyled = styled.div`
    color: white;
    width: 97%;
    width: 1092px;
    height: 63px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 20px;
    background-color: rgba(19, 33, 53, 1);
    padding: 0px 15px;
    font-size: 14px;
    padding: 10px;
    background-color: rgba(19, 33, 53, 1);
`;

const TipsStyled = styled.div`
    text-align: start;
    width: 100%;
    margin: auto;
    > div {
        max-width: 100%;
        border-bottom: 3px solid white;
    margin: auto;
    > div {
        width: 1092px;
        box-shadow: rgba(252, 249, 249, 0.367) 0px 3px 8px;
        height: 63px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; 
    overflow: hidden; 
`;

const ModalContent = styled.div`
    width: 619px;
    height: 188px;
    background-color: #1c2e49f9;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10000;
    position: relative;
    box-shadow: rgba(161, 161, 161, 0.25) 0px 6px 12px -2px, rgba(184, 183, 183, 0.3) 0px 3px 7px -3px;
    > div {
        display: flex;
        gap: 20px;
        margin-top: 30px;
    }
    & Button {
        padding: 7px 40px;
    }
`;
