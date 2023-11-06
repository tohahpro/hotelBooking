import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const BookingForm = () => {

    const roomDataLoad = useLoaderData()

    const { user } = useAuth()

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
            room_name: roomDataLoad.title,
            image: roomDataLoad.img

        }



        fetch('http://localhost:4100/bookings', {
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
                    alert('booking successful')
                }

            })


        // ---------------------






    }


    return (
        <div className="lg:px-56 h-screen bg-[#F8F8F8]">
            <div>
                <h2 className='text-3xl font-semibold'>Room name : {roomDataLoad?.title}</h2>
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
                            <input className='border w-full p-3 rounded-lg' type="text" name='price' defaultValue={roomDataLoad?.price} />
                        </div>
                    </div>

                    <input type="submit" value="ADD PRODUCT" className='text-center w-full bg-[#FF3811] btn text-white mt-10' />
                </form>

            </div>
        </div>
    );
};

export default BookingForm;