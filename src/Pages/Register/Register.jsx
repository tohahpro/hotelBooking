import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import login from '../../assets/images/login.image.png'
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import SocialRegister from "./SocialRegister";


const Register = () => {

    const { register, userUpdate } = useAuth()

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);


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
                    toast.success('Register successful')

                    navigate(location?.state ? location.state : '/')
                }


            })

            .catch(error => {
                return toast.error(error.message)
            })


    }



    return (
        <div>
            <div className="lg:mx-56 px-4 py-20">
                <div className="lg:flex p-0">
                    <div className="flex-1 flex items-center justify-center lg:justify-start">
                        <img className="w-full" src={login} alt="" />
                    </div>
                    <div className="card flex-1 justify-between flex-shrink-0  lg:border my-40">
                        <div className="card-body">
                            <h1 className="text-4xl font-semibold text-center">Register</h1>

                            <form onSubmit={handleRegister}>
                                <div className='mx-auto p-8 space-y-3'>

                                    {/* name field  */}
                                    <div>

                                        <input className='border text-black w-full rounded-md p-2 my-2' type="text" name="name" placeholder='Type your name' required />
                                    </div>

                                    {/* email field  */}
                                    <div>

                                        <input className='border text-black w-full rounded-md p-3 my-2' type="text" name="email" placeholder='Type your email' required />
                                    </div>

                                    {/* password field  */}
                                    <div>

                                        <div className='flex relative'>
                                            <input className='border text-black w-full rounded-md p-3 my-2 ' type={showPassword ? 'text' : 'password'} name="password" placeholder='Type your password' required />
                                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-6 right-2 text-lg text-black" required>{showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                                        </div>
                                    </div>
                                    <input type="submit" value="Login" className="p-3 border hover:cursor-pointer w-full  rounded-lg bg-[#BEAD8E] text-white" />

                                    <p className='mt-2'>Already Have Account ? Please  <Link to='/login'>
                                        <span className='text-blue-600'>
                                            <span className='underline'>Login</span>
                                        </span>
                                    </Link>

                                    </p>
                                    <SocialRegister></SocialRegister>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;