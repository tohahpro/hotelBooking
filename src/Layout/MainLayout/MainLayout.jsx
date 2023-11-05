import { Outlet } from "react-router-dom";

import Footer from "../../Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <hr />
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;