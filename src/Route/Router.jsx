import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import RoomDetails from "../Components/Booking/RoomDetails";
import HotelRooms from "../Components/HotelRoom/HotelRooms";
import MyBooking from "../Pages/MyBooking";
import BookingForm from "../Components/Booking/BookingForm";
import BookingUpdate from "../Components/Booking/BookingUpdate";
import ContactUs from "../Pages/ContactUs";
import PrivateRouter from "./PrivateRouter";


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/rooms',
                element: <HotelRooms></HotelRooms>,
                loader: () => fetch(`https://server-site-sepia.vercel.app/rooms`)
            },

            {
                path: '/room-details/:id',
                element: <RoomDetails></RoomDetails>,
                loader: () => fetch(`https://server-site-sepia.vercel.app/rooms`)
            },
            {
                path: '/booking-form/:id',
                element: <PrivateRouter><BookingForm></BookingForm></PrivateRouter>,
                loader: () => fetch(`https://server-site-sepia.vercel.app/rooms`)
            },
            {
                path: '/my-booking',
                element: <PrivateRouter><MyBooking></MyBooking></PrivateRouter>
            },
            {
                path: '/booking-update/:id',
                element: <BookingUpdate></BookingUpdate>

            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            }

        ]
    }
]);

export default createRouter;