import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

import { BsPencilFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { Link } from "react-router-dom";


const MyBooking = () => {

    const { user } = useAuth()
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4100/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user])



    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:4100/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successful')
                        const remaining = bookings.filter(item => item._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }





    return (
        <div className="min-h-screen lg:mx-56">
            <h2 className="text-center mt-10 lg:mt-20">Booking : {bookings.length}</h2>


            <div className="lg:py-20 px-4 lg:p-2">
                <div className="hidden md:flex items-center justify-between my-5 space-y-3 p-4 md:p-0 border md:border-none rounded-lg">
                    <div className="md:flex items-center gap-6">
                        <label></label>
                        <label className="md:w-32">Image</label>
                        <label>Name</label>
                    </div>
                    <div>
                        <label className="ml-8">Date</label>
                    </div>
                    <div>
                        <label>Price</label>
                    </div>
                    <div className="pr-6">
                        <label>Action</label>
                    </div>
                </div>
                <hr className="border border-black hidden md:flex" />
                {
                    bookings.map(item =>
                        <div key={item._id}>
                            <div className="grid md:flex items-center justify-between my-5 space-y-3 p-4 md:p-0 border md:border-none rounded-lg">
                                <div className="md:flex items-center gap-3">
                                    {
                                        item.image && <img className="md:w-32 rounded-lg" src={item.image} alt="" />
                                    }

                                    <p className="pt-2 w-36">{item.room_name}</p>
                                </div>
                                <div>
                                    {item.date}
                                </div>
                                <div>
                                    {item.price}
                                </div>
                                <div>
                                    <Link to={`/booking-update/${item._id}`} className="btn px-5  text-white bg-green-400"><BsPencilFill></BsPencilFill></Link>

                                    <button onClick={() => handleDelete(item._id)} className="btn px-5  text-white bg-[#FF3811]"><MdDelete></MdDelete></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyBooking;