import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle";


const HotelRooms = () => {


    const roomsDataLoad = useLoaderData([])

    return (
        <div className="lg:mx-56 my-20">

            <PageTitle title={'All Room'}></PageTitle>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {
                    roomsDataLoad.map((room, idx) =>
                        <div key={idx}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className="w-full" src={room.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <div>
                                        <h2 className="text-lg font-medium">{room.title}</h2>
                                        <p className="text-lg font-medium">Price : {room.price}$/night</p>
                                    </div>
                                    <div className="card-actions">
                                        <Link to={`/room-details/${room._id}`} className="px-4 py-2 rounded-md bg-[#BEAD8E]">Booked Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default HotelRooms;