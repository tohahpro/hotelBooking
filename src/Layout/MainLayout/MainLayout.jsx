import { Outlet, useNavigation } from "react-router-dom";

import Footer from "../../Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";


const MainLayout = () => {

    const navigation = useNavigation();

    const goToTop = () => window.scrollTo(0, 0)

    goToTop()



    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ?
                    <div className="flex justify-center items-center h-[90vh]">
                        <span className="loading loading-spinner text-warning"></span>
                    </div>
                    :
                    <Outlet></Outlet>
            }
            <hr />
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;