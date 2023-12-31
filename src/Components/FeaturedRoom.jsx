import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const FeaturedRoom = () => {

    const [featured, setFeatured] = useState([])

    useEffect(() => {
        fetch('https://server-site-sepia.vercel.app/rooms')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">

            {
                featured.slice(0, 6).map((room, idx) =>
                    <div key={idx}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className="w-full" src={room.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="card-actions">
                                    <Link to={`/booking-form/${room._id}`} className="btn bg-[#BEAD8E]">Booked Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default FeaturedRoom;