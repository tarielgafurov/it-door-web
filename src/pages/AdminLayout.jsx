import { Outlet } from "react-router-dom";
import SideBar from "../admin/SideBar";

const AdminLayout = () => {
    return (
        <div style={{ display: "flex" }}>
            <SideBar />
            <main style={{ flex: 1, padding: "20px" }}>
                <Outlet /> 
            </main>
        </div>
    );
};

export default AdminLayout;
