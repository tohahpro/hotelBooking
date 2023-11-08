import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";


const BookingUpdate = () => {

    const { user } = useAuth()


    const { id } = useParams()
    const axiosSecure = useAxios()

    const [loadData, setLoadData] = useState([])
    const [, setFindData] = useState('')

    const url = `https://server-site-sepia.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {

        axiosSecure.get(url, { withCredentials: true })
            .then(res => {
                setLoadData(res.data)
            })



        const findDetails = loadData?.find(item => item._id == id)
        setFindData(findDetails)

    }, [url, loadData, id, axiosSecure])


    const handleUpdateDate = e => {
        e.preventDefault()
        const date = e.target.date.value;


        const updateDate = { date };
        console.log(updateDate);

        fetch(`http://localhost:4100/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('update complete')
                }
            })


    }

    return (
        <div className='p-16 rounded-xl my-20  space-y-8 w-1/4 mx-auto bg-[#F8F8F8]'>
            <form onSubmit={handleUpdateDate}>
                <div className='flex gap-8 '>

                    <div className='w-full'>
                        <label>Update your booking date</label> <br />
                        <input className='border w-full p-3 rounded-lg mt-10' type="date" name="date" required />
                    </div>
                </div>
                <input type="submit" value="Update Date" className='text-center w-full bg-[#FF3811] btn text-white mt-5' />
            </form>

        </div>
    );
};


export default BookingUpdate;