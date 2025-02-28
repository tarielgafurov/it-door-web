import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import OfficeGalleryAdmin from './OfficeGalleryAdmin';
import AdminApplication from './AdminApplication';
import AdminMentor from './AdminMentor';

const BigCallRoutes = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar/>
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<h1 style={{ color: "white" }} >Добро пожаловать!</h1>} />
          <Route path="/ourmentors" element={<AdminMentor/>} />
          <Route path="/application" element={<AdminApplication/>} />
          <Route path="/ouroffice" element={<OfficeGalleryAdmin/>} />
        </Routes>
      </div>
    </div>
  );
};

export default BigCallRoutes;