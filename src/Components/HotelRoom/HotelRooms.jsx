import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle";
import { useEffect, useState } from "react";




const HotelRooms = () => {


    const roomsDataLoad = useLoaderData([])
    const [roomData, setRoomData] = useState(roomsDataLoad)


    const [asc, setAsc] = useState(true)



    useEffect(() => {
        fetch(`https://server-site-sepia.vercel.app/rooms?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setRoomData(data))
    }, [asc])



    return (
        <div className="lg:px-56 py-20 bg-[#F8F8F8]">

            <PageTitle title={'All Room'}></PageTitle>

            <div className="my-8">
                <button onClick={() => setAsc(!asc)} className="px-4 py-1 bg-[#BEAD8E] text-white font-medium rounded-lg">{asc ? 'Price High To Low' : 'Price Low To High'}</button>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {
                    roomData.map((room, idx) =>
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