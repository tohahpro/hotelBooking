import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import toast from "react-hot-toast";


import useAuth from "../Hooks/useAuth";

const Subscribe = () => {

    const { register, } = useAuth()

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e => {
        e.preventDefault()


        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password);


        // if (!/^(?=.*[a-z]).{8,}$/.test(password)) {
        //     return toast.error("Password length must have 8 characters")
        // }

        // else if (!/(?=.*[!@#$%^&*])/.test(password)) {
        //     return toast.error("Password must have a special character")
        // }
        // else if (!/(?=.*[A-Z])/.test(password)) {
        //     return toast.error("Password must have a capital letter")
        // }
        // else if (!/(?=.*\d)/.test(password)) {
        //     return toast.error("Password must have a number")
        // }

        register(email, password)
            .then(res => {

                if (res.user) {
                    toast.success('Subscribe successful')

                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(error => {
                return toast.error(error.message)
            })


    }


    return (
        <div className="flex justify-center py-28">
            <div>
                <h3 className="text-center text-4xl font-semibold">Subscribe</h3>
                <form onSubmit={handleRegister}>
                    <div className=' md:p-5 lg:flex gap-6'>
                        {/* email field  */}
                        <input className='border text-black w-96 rounded-md p-3 my-2' type="text" name="email" placeholder='Enter your email address' required />

                        {/* password field  */}
                        <div className='flex relative'>
                            <input className='border text-black w-96 rounded-md p-3 my-2 ' type={showPassword ? 'text' : 'password'} name="password" placeholder='Enter your password' required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-6 right-2 text-lg text-black" required>{showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>

                        <div className="flex items-center">
                            <button className="px-6 py-[10px] font-medium rounded-md bg-[#BEAD8E] text-white text-lg border">Subscribe</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Subscribe;