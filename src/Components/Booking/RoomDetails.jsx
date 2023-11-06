import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle";
import { useEffect, useState } from "react";


const RoomDetails = () => {

    const dataLoaded = useLoaderData({})

    const [bookingData, setBookingData] = useState('')
    // const [match, setMatch] = useState('')
    // console.log(match);
    // const [dateMatch, setDateMatch] = useState('')


    const { _id, title, description, img, internet, price, room_size, bed, park, market, lake, restaurants, cafe, shop } = dataLoaded || {}

    useEffect(() => {
        fetch('http://localhost:4100/bookings')
            .then(res => res.json())
            .then(data => setBookingData(data))

        // const roomMatch = bookingData.find(item => item.room_name == title)
        // setMatch(roomMatch)

        // const date = bookingData.find(item => item.date == title)


    }, [title, bookingData])


    return (
        <div className="mx-10 md:mx-20 lg:mx-56">
            <PageTitle title={'Room Details'}></PageTitle>

            <div className="flex justify-center">
                <img src={img} alt="" />
            </div>
            <div>
                <h2><span className="text-lg font-medium">Room Name :</span> {title}</h2>
                <p><span className="text-lg font-medium">Description : </span>{description}</p>
                <p><span className="text-lg font-medium">Bed Size : </span>{bed}</p>
                <p><span className="text-lg font-medium">Room Size : </span>{room_size}</p>
                <p><span className="text-lg font-medium">Internet : </span>{internet}</p>
                <p><span className="text-lg font-medium">Price : </span>{price}</p>
            </div>

            <Link to={`/booking-form/${_id}`} className="btn mt-10">Booked Now</Link>

            <div className="md:flex gap-10 lg:gap-20 my-10 md:my-20">
                <div className="">
                    <h3 className="text-2xl font-semibold">What is nearby</h3>
                    <p className="text-base">{market}</p>
                    <p className="text-base">{park}</p>
                    <p className="text-base">{lake}</p>
                </div>
                <div className="hidden md:flex divider md:divider-horizontal">OR</div>
                <div>
                    <h3 className="text-2xl font-semibold">Restaurants</h3>
                    <p className="text-base">{restaurants}</p>
                    <p className="text-base">{cafe}</p>
                    <p className="text-base">{shop}</p>
                </div>
            </div>



        </div>
    );
};

export default RoomDetails;