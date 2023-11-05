import { useEffect, useState } from "react";


const FeaturedRoom = () => {

    const [featured, setFeatured] = useState([])

    useEffect(() => {
        fetch('room.json')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])



    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                featured.slice(0, 6).map((room, idx) =>
                    <div key={idx}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={room.image} alt="Shoes" /></figure>

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FeaturedRoom;