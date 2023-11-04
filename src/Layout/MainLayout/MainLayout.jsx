import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import Footer from "../../Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
            <hr />
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;