
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Form = ({ save }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();  

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const loginData = {
            username: username,
            pwd: password,  
        };

        try {
            const response = await fetch("http://157.173.121.178/api/auth/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            setLoading(false);

            if (!response.ok) {
                throw new Error("An error occurred while submitting the form");
            }

            const data = await response.json();
            console.log("Form submitted successfully:", data);

            navigate("/dashboard");

        } catch (error) {
            setLoading(false);
            setError("Пользователь не найдено");
            console.error("Network error:", error);
        }
    };

    return (
        <>
            <ModalBackdrop />
            <FormStyled onSubmit={handleLogin}>
                <AdminDivStyled>
                    <b>Войти</b>
                </AdminDivStyled>
                {error && <div style={{ color: "red" }}>{error}</div>}

                <InputStyled
                    type="text"
                    placeholder="ПОЛЬЗОВАТЕЛЬ"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputStyled
                    type="password"
                    placeholder="ПАРОЛЬ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <BtnDiv>
                    <button type="button" onClick={save}>
                        выход
                    </button>
                    <button type="submit" disabled={loading}>
                        {loading ? "Загрузка..." : "вход"}
                    </button>
                </BtnDiv>
            </FormStyled>
        </>
    );
};

export default Form;


const FormStyled = styled.form`
  width: 35%;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0px;
  background-color: white;
  margin: auto;
  margin-top: 15px;
  border-radius: 13px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  left: 35%;
  top: 15%;
  z-index: 4;
`;

const InputStyled = styled.input`
  width: 270px;
  height: 30px;
  border: 1px solid black;
  color: black;
  padding: 5px 8px;
  font-size: 15px;
  border-radius: 5px;
  outline: none;
`;

const AdminDivStyled = styled.div`
  > b {
    font-size: 30px;
    padding: 5px 0px;
    border-bottom: 3px solid green;
  }
`;

const BtnDiv = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    background-color: #2185d9;
    font-weight: 600;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 35px;
    font-size: 19px;

    &:hover{
        background-color: #1b619b;
        cursor: pointer;
    }
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 2;
`;


