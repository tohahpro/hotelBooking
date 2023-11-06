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
                path: 'rooms',
                element: <HotelRooms></HotelRooms>,
                loader: () => fetch(`http://localhost:4100/rooms`)
            },

            {
                path: 'room-details/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({ params }) => fetch(`http://localhost:4100/rooms/${params.id}`)
            },
            {
                path: 'booking-form/:id',
                element: <BookingForm></BookingForm>,
                loader: ({ params }) => fetch(`http://localhost:4100/rooms/${params.id}`)
            },
            {
                path: 'my-booking',
                element: <MyBooking></MyBooking>
            }

        ]
    }
]);

export default createRouter;