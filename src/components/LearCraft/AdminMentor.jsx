import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OnlyCamera from '../../assets/images/Слой_x0020_1.png';
import { createPortal } from 'react-dom';
import { MdDeleteForever } from "react-icons/md";

const AdminMentor = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState(null);
  const [mentors, setMentors] = useState([]);
  const [modul, setModul] = useState(false);

  useEffect(() => {
  
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://157.173.121.178/api/mentor/list");
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const data = await response.json();
        setMentors(data.result);
        localStorage.setItem("mentors", JSON.stringify(data.result)); 
      } catch (error) {
        console.error("Ошибка загрузки менторов:", error);
        const savedMentors = localStorage.getItem("mentors");
        if (savedMentors) {
          setMentors(JSON.parse(savedMentors));
        }
      }
    };
    
    fetchMentors();
  }, []);

   const handleDeleteMentor = async (mentorId) => {
    try {
      const response = await fetch(`http://157.173.121.178/api/mentor/delete/${mentorId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Ошибка при удалении ментора");
      }

      setMentors((prevMentors) => {
        const updatedMentors = prevMentors.filter(mentor => mentor._id !== mentorId);
        localStorage.setItem("mentors", JSON.stringify(updatedMentors));
        return updatedMentors;
      });

      alert("Ментор успешно удален!");
    } catch (error) {
      console.error("Ошибка при удалении ментора:", error);
    }
  };



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleAddMentor = async () => {
    if (!image || !name || !description || !experience) {
      alert("Пожалуйста, заполните все поля и выберите изображение.");
      return;
    }

      
  if (mentors.length >= 8) {
    alert("Достигнуто максимальное количество менторов (8).");
    return;
  }
  
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("jobTitle", description);
    formData.append("workExperience", experience);

  
    
  
    try {
      const response = await fetch("http://157.173.121.178/api/mentor/add", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Ошибка при загрузке");
      }
  
     
      const data = await response.json();
      console.log("Ответ сервера:", data);
  
      const newMentor = {
        _id: data.result._id,
        image: data.result.image,
        name: data.result.name,
        jobTitle: description,  
        workExperience: experience,  
      };
      
      
  
      setMentors((prevMentors) => {
        const updatedMentors = [...prevMentors, newMentor];
        localStorage.setItem("mentors", JSON.stringify(updatedMentors)); 
        return updatedMentors;
      });
  
      setImage(null);
      setName("");
      setDescription("");
      setExperience("");
      setModul(false);
      alert("Ментор успешно добавлен!");
    } catch (error) {
      console.error("Ошибка загрузки файла", error);
    }
  };

  
  

  return (
    <>
      <PlayboyCarti>
        <Button onClick={() => setModul(true)}>Добавить новый</Button>
        <KingContainer>
          <h1>Наши менторы</h1>
          <WhereAreYou>
            {mentors.map((mentor, index) => (
              
              <MentorItem key={mentor._id || index}>
                <img src={"http://157.173.121.178/api/src/uploads/" + mentor.image} alt={`Картинка ${index}`} />
                <Future>
                  <h1>{mentor.name}</h1>
                  <MentorRoleExperience>
                  <p>{mentor.jobTitle || "Нет должности"}</p>
                  <p>{mentor.workExperience || "Нет опыта"}</p>
                  </MentorRoleExperience>
                 
                  <button onClick={() => handleDeleteMentor(mentor._id)} ><DeleteQNXY /></button>
                </Future>
              </MentorItem>
              
            ))}
          </WhereAreYou>
        </KingContainer>
      </PlayboyCarti>
      {modul &&
        createPortal(
          <Modal>
            <h2>Добавить нового ментора</h2>
            <Camera>
              <Knut>
                <HiddenInput type="file" id="image" accept="image/*" onChange={handleImageChange} />
                {!image && <FileLabel htmlFor="image"><img src={OnlyCamera} alt="" /></FileLabel>}
                {image && <Preview><img src={URL.createObjectURL(image)} alt="Preview" /></Preview>}
              </Knut>
            </Camera>
            <InpuT>
              <label>Фамилия & Имя</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Асанов Асан" />
            </InpuT>
            <INput>
              <label>Должность</label>
              <textarea rows="3" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Текст..."></textarea>
            </INput>
            <InPuT>
              <label>Опыт работы</label>
              <textarea rows="4" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Опыт..."></textarea>
            </InPuT>
            <ButtonModal onClick={handleAddMentor}>Добавить</ButtonModal>
          </Modal>, 
          document.getElementById('modal')
        )}
      {modul && createPortal(<Backdrop onClick={() => setModul(false)} />, document.getElementById('backdrop'))}
    </>
  );
};

export default AdminMentor;


const PlayboyCarti = styled.div`
  width: 1120px;
  height: 750px;
  margin-left: 304px;
`

const KingContainer =  styled.div`
    width: 1116px;
    height: 715px;
    border-radius: 16px;
    >h1{
      position: absolute;
      color: white;
      margin-top: -40px;
      font-size: 24px;
      font-weight: 700;
    }
`
const  Button = styled.button`
    width: 185px;
    height: 40px;
    background-color: #2185D9;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 18px;
    font-weight: 400;
    margin-left: 935px;
    &:hover{
      transition: transform 0.5s ease;
      transform: scale(1.05);
    }
    &:active{
      transition: transform 0.5s ease;
      background-color: #1773bf;
    }
`
const WhereAreYou = styled.div`
  width: 1116px;
  height: 715px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 0 auto; 
`

const MentorItem =  styled.div`
  width: 261px;
  height: 344px;
  border-radius: 16px;
  >img{
    width: 261px;
    height: 344px;
    border-radius: 16px;
  }
`

const Future = styled.div`
width: 261px;
height: 88px;
border-radius: 0 0 16px 16px;
background: #0707072E;
backdrop-filter: blur(7.199999809265137px);
display: flex;
flex-direction: column;
align-items: center;
margin-top: -0px;
>h1{
  color: white;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  margin-top: 5px;
  margin-left: -70px;
}
>button{
  border: none;
  background: none;
  margin-left: 170px;
  margin-top: -50px;
}
`
const DeleteQNXY = styled(MdDeleteForever)`
  color: red;
  width: 27px;
  height: 27px;
`
const MentorRoleExperience = styled.div`
width: 148px;
height: 48px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 36px;
margin-left: -70px;
>p:nth-child(1){
  color: white;
  font-size: 16px;
  font-weight: 300;
  margin-top: -4px;
}
>p:nth-child(2){
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  margin-top: -7px;
}
`

const Modal = styled.div`
  position: absolute;
  width: 952px;
  height: 657px;
  border-radius: 20px;
  background: #041124;
  z-index: 3;
  margin-top: -931px;
  margin-left: 263px;
  >h2{
    position: absolute;
    color: white;
    font-size: 24px;
    font-weight: 700;
    left: 57px;
    margin-top: 50px;
  }
`
const Camera =  styled.div`
  border: 1px solid #CECEEA;
  width: 289px;
  height: 389px;
  border-radius: 20px;
  margin-left: 57px;
  margin-top: 130px;
  >img{
    cursor: pointer;
    margin-top: 153.09px;
    margin-left: 97px;
  }
  >input{
    width: 88.49px;
  }
`
const InpuT = styled.div`
  width: 432px;
  height: 64px;
  margin-left: 410px;
  margin-top: -405px;
  >input{
    border: 1px solid #CECEEA;
    width: 442px;
    height: 40px;
    font-size: 1rem;
    font-weight: 300;
    color: white;
    border-radius: 8px;
    background: transparent;
    outline: none;
    margin-top: 20px;
  }
  >label{
    position: absolute;
    color: white;
    font-size: 18px;
    font-weight: 400;
    margin-top: -2px;
  }
`
const INput = styled.div`
  width: 432px;
  height: 135px;
  margin-left: 410px;
  margin-top: 22px;

  >textarea {
    border: 1px solid #CECEEA;
    width: 432px;
    height: 111px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 300;
    outline: none;
    color: white;
    background: transparent;
    margin-top: 20px;
    padding: 8px; 
    resize: none;
  }

  >label {
    position: absolute;
    font-size: 18px;
    font-weight: 400;
    color: white;
    margin-top: -2px;
  }
`;
const InPuT = styled.div`
  width: 432px;
  height: 64px;
  margin-top: 46px;
  margin-left: 410px;
  >textarea{
    border: 1px solid #CECEEA;
    width: 442px;
    height: 40px;
    font-size: 1rem;
    font-weight: 300;
    color: white;
    border-radius: 8px;
    background: transparent;
    outline: none;
    margin-top: 20px;
  }
  >label{
    position: absolute;
    color: white;
    font-size: 18px;
    font-weight: 400;
    margin-top: -2px;
  }
`

const ButtonModal = styled.button`
    width: 216px;
    height: 40px;
    border-radius: 4px;
    background: #2185D9;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    left: 642px;
    margin-top: 70px;
    &:hover{
        transition: transform 0.5s ease;
        transform: scale(1.05);
    }
    &:active{
        transition: transform 0.5s ease;
        background-color: #1773bf;
    }
`
const Knut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`

const HiddenInput = styled.input`
  display: none;
  `;

const FileLabel = styled.label`
  width: 88.49px;
  height: 88.37px;
  background-color: #3b3b3b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #4a4a4a;
  }
  
  svg {
    color: white;
    font-size: 24px;
  }
  `;

const Preview = styled.div`
  width: 289px;
  height: 395px;
  overflow: hidden;
  margin-top: -150px;
  img {
    width: 100%;
    height: 98%;
    border-radius: 20px;
  }
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;