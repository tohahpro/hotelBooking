import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle";
import { useEffect, useState } from "react";


const HotelRooms = () => {


    const roomsDataLoad = useLoaderData([])

    const [dateLoad, setDateLoad] = useState([])



    const [availableRoom, setAvailableRoom] = useState('')


    useEffect(() => {
        fetch('http://localhost:4100/bookings')
            .then(res => res.json())
            .then(data => setDateLoad(data))
    }, [])

    const dateSubmit = (e) => {
        e.preventDefault()
        const date = e.target.date.value;

        const dateMatch = dateLoad.filter(item => item.date === date)

        const availableRoomLength = (roomsDataLoad.length - dateMatch.length)
        setAvailableRoom(availableRoomLength)


    }

    return (
        <div className="lg:mx-56 my-20">

            <PageTitle title={'All Room'}></PageTitle>


            <div className="flex justify-center my-20 w-full">
                <form onSubmit={dateSubmit}>
                    <input type="date" name="date" className="p-3 border w-96" />
                    <input type="submit" value="Submit" className="p-3 border bg-[#BEAD8E]" />
                </form>
            </div>

            <h3>Available Room : {availableRoom}</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {
                    roomsDataLoad.map((room, idx) =>
                        <div key={idx}>
                            <Link to={`/room-details/${room._id}`}>
                                <div className="rounded-2xl border">
                                    <figure><img className="w-full rounded-t-2xl" src={room.img} alt="Shoes" /></figure>
                                    <div className="card-body rounded-b-2xl bg-[#BEAD8E] text-white">
                                        <h2 className="text-lg">{room.title}</h2>
                                        <p className="text-lg"><span className="text-lg font-medium">Price :</span><span> {room.price}</span>$/night</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default HotelRooms;