
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
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

        if (!username.trim() || !password.trim()) {
            setError("Пожалуйста, заполните все поля");
            return;
        }

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

            const data = await response.json();
            setLoading(false);

            if (!response.ok) {
                throw new Error(data.message || "Ошибка при входе в систему");
            }

            if (data.accessToken) {
                localStorage.setItem("token", data.accessToken);
                window.dispatchEvent(new Event("storage")); 
            }

            console.log("✅ Успешный вход:", data);
            
            setUsername("");
            setPassword("");

            navigate("/dashboard");

        } catch (error) {
            setLoading(false);
            setError(error.message);
            console.error("❌ Ошибка сети:", error);
        }
    };

    return (
        <>
            <ModalBackdrop />
            <FormStyled onSubmit={handleLogin}>
                <AdminDivStyled>
                    <b>Войти</b>
                </AdminDivStyled>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <InputStyled
                    type="text"
                    placeholder="ПОЛЬЗОВАТЕЛЬ"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={loading} 
                />
                <InputStyled
                    type="password"
                    placeholder="ПАРОЛЬ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading} 
                />

                <BtnDiv>
                    <button type="button" onClick={save} disabled={loading}>
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

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  animation: ${slideDown} 0.5s ease-in-out;
  position: fixed;
  left: 35%;
  top: 15%;
  z-index: 19999;
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

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
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
    cursor: pointer;

    &:hover {
      background-color: #1b619b;
    }

    &:disabled {
      background-color: gray;
      cursor: not-allowed;
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
  z-index: 19999;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

