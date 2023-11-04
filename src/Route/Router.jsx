import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import MyBookings from "../Pages/MyBookings";
import Register from "../Pages/Register/Register";

const createRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'my-bookings',
                element: <MyBookings></MyBookings>
            }
        ]
    }
]);

export default createRouter;