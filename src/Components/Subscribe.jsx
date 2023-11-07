import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import toast from "react-hot-toast";


import useAuth from "../Hooks/useAuth";
import { TypeAnimation } from "react-type-animation";

const Subscribe = () => {

    const { register, userUpdate } = useAuth()

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password);


        if (!/^(?=.*[a-z]).{8,}$/.test(password)) {
            return toast.error("Password length must have 8 characters")
        }

        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            return toast.error("Password must have a special character")
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            return toast.error("Password must have a capital letter")
        }
        else if (!/(?=.*\d)/.test(password)) {
            return toast.error("Password must have a number")
        }

        register(email, password)
            .then(res => {
                userUpdate(name)
                    .then(() => {

                    })
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
        <div className="py-28">
            <div>
                <h3 className="text-center text-4xl font-semibold">Subscribe</h3>
                <div className="lg:flex lg:justify-between items-center mt-10">
                    <div className="lg:w-1/2 mx-5">
                        <h3 className="text-2xl text-center md:flex justify-center font-medium mb-4 flex">
                            <TypeAnimation
                                sequence={[
                                    'Subscribe for new Offers',
                                    5000,
                                    'Subscribe to Our website',
                                    5000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em' }}
                                repeat={Infinity}
                            />
                        </h3>
                        <p className="text-xl flex text-justify">Stay in the know! Subscribe to our newsletter and be the first to receive the latest updates, exclusive deals, and special offers delivered right to your inbox. Do not miss out on exciting promotions and insider information – join our community of subscribers today and experience a world of benefits tailored just for you. </p>
                    </div>
                    <div className="flex justify-center">
                        <form onSubmit={handleRegister}>
                            <div className='md:p-5'>
                                <div>
                                    {/* name field  */}
                                    <input className='border-b-2 border-b-black rounded-none bg-[#F8F8F8]  text-black md:w-96 p-3 my-2' type="text" name="name" placeholder='Enter your name' required />
                                </div>
                                {/* email field  */}
                                <input className='border-b-2 border-b-black rounded-none bg-[#F8F8F8]  text-black md:w-96 p-3 my-2' type="email" name="email" placeholder='Enter your email address' required />

                                {/* password field  */}
                                <div className='flex relative'>
                                    <input className='border-b-2 border-b-black rounded-none bg-[#F8F8F8] text-black md:w-96 p-3 my-2' type={showPassword ? 'text' : 'password'} name="password" placeholder='Enter your password' required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-6 right-2 text-lg text-black" required>{showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                                </div>

                                <div className="flex items-center">
                                    <button className="px-6 py-[10px] font-medium rounded-md bg-[#BEAD8E] text-white text-lg border">Subscribe</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;