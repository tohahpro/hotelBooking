import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BookingForm = () => {

    const roomDataLoad = useLoaderData()

    const { id } = useParams()
    const { user } = useAuth()
    const [detailsData, setDetailsData] = useState('')

    useEffect(() => {
        const findDetails = roomDataLoad.find(item => item._id == id)
        setDetailsData(findDetails)
    }, [roomDataLoad, id])


    console.log(detailsData);


    const handleBooking = e => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const date = from.date.value;
        const email = from.email.value;
        const price = from.price.value;

        const booking = {
            user_name: name,
            date: date,
            email: email,
            price: price,
            room_name: detailsData.title,
            image: detailsData.img

        }



        fetch('https://server-site-sepia.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Login successful')
                }

            })


        // ---------------------
    }



    // const handleReview = e => {
    //     e.preventDefault()

    //     const form = e.target

    //     const rating = form.rating.value
    //     const comment = form.comment.value
    //     const timeSpend = form.timeSpend.value
    //     const review = {

    //         rating: rating,
    //         comment: comment,
    //         timeSpend: timeSpend
    //     }

    //     console.log(review);


    //     fetch(`http://localhost:4100/rooms/${detailsData._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(review)

    //     })

    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }


    return (
        <div className="lg:px-56 bg-[#F8F8F8]">
            <div>
                <h2 className='text-3xl font-semibold'>Room name : {detailsData?.title}</h2>
            </div>
            {/* from  */}

            <div className='p-16 rounded-xl py-20  space-y-8'>
                <form onSubmit={handleBooking}>
                    <div className='flex gap-8 '>
                        <div className='w-1/2'>
                            <label>Name</label> <br />
                            <input className='border w-full p-3 rounded-lg' type="text" name="name" placeholder="Your Name" defaultValue={user?.displayName} />
                        </div>
                        <div className='w-1/2'>
                            <label>Date</label> <br />
                            <input className='border w-full p-3 rounded-lg' type="date" name="date" placeholder="Your Name" required />
                        </div>
                    </div>


                    <div className='flex gap-8 '>
                        <div className='w-1/2'>
                            <label>Email</label> <br />
                            <input className='border w-full p-3 rounded-lg' type="text" name="email" defaultValue={user?.email} />
                        </div>
                        <div className='w-1/2'>
                            <label>Due Amount</label> <br />
                            <input className='border w-full p-3 rounded-lg' type="text" name='price' defaultValue={detailsData?.price} />
                        </div>
                    </div>

                    <input type="submit" value="Booking" className='text-center w-full bg-[#BEAD8E] btn text-white mt-10' />
                </form>


                {/* -------------- */}
                <div className="py-10">
                    <h3 className="text-center text-3xl font-medium py-20">Your Review</h3>
                    <form className="space-y-8">

                        {/* form row  */}
                        <div className="md:flex gap-6">
                            <div className="space-y-4 md:w-1/2">
                                <label className="flex justify-start">
                                    <span className="text-xl font-semibold">Rating</span>

                                </label>
                                <label>
                                    <select className="input w-full" name="rating" id="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </label>
                            </div>

                            {/* Details  */}

                            <div className="space-y-4 md:w-1/2">
                                <label className="flex justify-start">
                                    <span className="text-xl font-semibold">Time Spend Day</span>
                                </label>
                                <label>
                                    <input type="number" required name="timeSpend" placeholder="your time spend time" className="input rounded-sm w-full" />
                                </label>
                            </div>
                        </div>



                        <div className="space-y-4 md:w-full">
                            <label className="flex justify-start">
                                <span className="text-xl font-semibold">Comment</span>
                            </label>
                            <label>
                                <textarea className="w-full p-3 text-lg" placeholder="Your Comment" name="comment" id="" cols="10" rows="10"></textarea>
                            </label>
                        </div>

                        <input type="submit" value="Add Product" className="btn btn-block bg-[#BEAD8E] text-white hover:bg-black hover:text-red-500 hover:border-red-500" />

                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookingForm;