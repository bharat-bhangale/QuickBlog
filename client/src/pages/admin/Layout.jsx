import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import SideBar from "../../components/admin/Sidebar";

const Layout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <>
            <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
                <img
                    src={assets.logo}
                    alt="Logo"
                    className="w-32 sm:w-40 cursor-pointer"
                    onClick={() => navigate("/")}
                />
                <button
                    onClick={handleLogout}
                    className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
                >
                    Logout
                </button>
            </div>
            <div className="flex h-[calc(100vh-70px)]">
                <SideBar />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
