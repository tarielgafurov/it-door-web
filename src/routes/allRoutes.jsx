

import { Navigate, Route, Routes } from "react-router-dom";
import Index from "../pages";
import AdminLayout from "../pages/AdminLayout";
import AdminMentor from "../admin/AdminMentor";
import AdminApplication from "../admin/AdminApplication";
import OfficeGalleryAdmin from "../admin/OfficeGalleryAdmin";
import ProtectedRoute from "../store/dashboard/ProtectedRoute";
import LoginPage from "../pages/Login";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<AdminMentor />} />
                <Route path="office" element={<OfficeGalleryAdmin />} />
                <Route path="requests" element={<AdminApplication />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AllRoutes;
