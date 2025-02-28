import React, { useState, useEffect } from "react";
import del from "../assets/icons/delete.png";
import styled from "styled-components";
import ButtonUI from "../components/UI/ButtonUI";

const OfficeGalleryContainer = styled.div`
  max-width: 93%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const AddImageContainer = styled.div`
  width: 100%;
  height: 800px;
  padding: 0px 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  > h2 {
    font-size: 24px;
  }
`;

const ImageMapGlavnyi = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: auto; 
  max-height: 600px; 
  padding-right: 10px; 
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;


const GalleryMapContainer = styled.div`
  position: relative;
`;

const MapImgContainer = styled.img`
  width: 211px;
  height: 278px;
  border-radius: 16px;
`;

const DeleteContainer = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
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

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #041124;
  padding: 20px;
  border-radius: 10px;
  z-index: 2000;
  width: 30%;
  height: 80% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  box-shadow: 0px 0px 20px 1px #FFFFFF1A;

`;

const CameraIcon = styled.img`
  width: 220px;
  height: 280px;
  cursor: pointer;

`;

const CameraContainer = styled.div`
    border: 2px solid white;
    width: 249px;
    height: 380px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`



const HiddenFileInput = styled.input`
  display: none;
`;

const OfficeGalleryAdmin = () => {
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    fetch("http://157.173.121.178/api/office/get-all/?page=1")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results || data);
      })
      .catch((err) => {
        console.error("Error fetching images:", err);
      });
  }, [isTriggered]);

  const deleteImage = async (id) => {
    try {
        const response = await fetch(`http://157.173.121.178/api/office/delete/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Ошибка при удалении изображения");
        }

        setIsTriggered(!isTriggered);
    } catch (error) {
        console.error("Error deleting image:", error);
        alert("Сүрөттү өчүрүүдө ката кетти! Пожалуйста, попробуйте позже.");
    }
};


  const ModalHandler = () => {
    setModal((prev) => !prev);
    setSelectedFile(null);
    setPreviewImage(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      alert("Сураныч, файл тандаңыз!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://157.173.121.178/api/office/add", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Сүрөт жүктөөдө ката кетти!");
      }

      setIsTriggered(!isTriggered);
      ModalHandler();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Сүрөт жүктөөдө ката кетти! Пожалуйста, попробуйте позже.");
    }
  };


  return (
    <OfficeGalleryContainer>
      <AddImageContainer>
        <ImageContainer>
          <h2>Биздин офис</h2>
          <ButtonUI type="button" onClick={ModalHandler}>
            Жаңы кошуу
          </ButtonUI>
        </ImageContainer>

        <ImageMapGlavnyi>
          {images.result?.map((el) => (
            <GalleryMapContainer key={el.id}>
              <MapImgContainer src={el.image} alt="Сүрөт" />
              <DeleteContainer src={del} alt="Өчүрүү" onClick={() => deleteImage(el._id)} />
            </GalleryMapContainer>
          ))}
        </ImageMapGlavnyi>
      </AddImageContainer>

      {modal && (
        <>
          <ModalBackdrop onClick={ModalHandler} />
          <ModalContainer>
            <h1>Жаңы сүрөт кошуу</h1>
            <CameraContainer>
                    {previewImage ? (
                    <img src={previewImage} alt="Тандалган сүрөт" width="220px" height="280px" style={{ borderRadius: "10px" }} />
                    ) : (
                    <CameraIcon
                    src="https://png.pngtree.com/png-vector/20240720/ourmid/pngtree-colorful-camera-icon-with-long-shadow-on-white-vector-png-image_7233580.png"
                    onClick={() => document.getElementById("fileInput").click()}
                    />
                )}
                <HiddenFileInput id="fileInput" type="file" accept="image/*" onChange={handleFileChange} />
                <ButtonUI onClick={uploadImage} disabled={!selectedFile}>Кошуу</ButtonUI>
            </CameraContainer>
          </ModalContainer>
        </>
      )}

    </OfficeGalleryContainer>
  );
};

export default OfficeGalleryAdmin;