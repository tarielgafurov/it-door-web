import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Биринчи тандалган файлды алуу
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const response = await fetch('https://your-server-url/upload', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          console.log('Файл ийгиликтүү жүктөлдү');
        } else {
          console.error('Жүктөө ката кетти');
        }
      } catch (error) {
        console.error('Файлды жүктөө катасы:', error);
      }
    } else {
      console.log('Файл тандалган жок');
    }
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (selectedFile) {
//       console.log('Тандалган файл:', selectedFile);
//     } else {
//       console.log('Файл тандалган жок');
//     }
//   };

  return (
    <div>
      <h2>React'те Файл Жүктөө Мисалы</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Жүктөө</button>
      </form>
      {selectedFile && (
        <div>
          <h3>Файлдын Маалыматы:</h3>
          <p>Аты: {selectedFile.name}</p>
          <p>Түрү: {selectedFile.type}</p>
          <p>Өлчөмү: {(selectedFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;