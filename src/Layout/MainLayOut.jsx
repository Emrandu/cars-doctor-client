import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const MainLayOut = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayOut;