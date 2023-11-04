import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import login from '../../assets/images/login.image.png'
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const { Login } = useAuth()


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);



        Login(email, password)
            .then(res => {
                if (res.user) {
                    toast.success('Login successful')
                }

                navigate(location?.state ? location.state : '/')



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
                            <h1 className="text-4xl font-semibold text-center">Login</h1>

                            <form onSubmit={handleLogin}>
                                <div className='mx-auto p-8 space-y-3'>

                                    {/* email field  */}
                                    <div>

                                        <input className='border w-full rounded-md p-3 my-2' type="text" name="email" placeholder='Type your email' required />
                                    </div>
                                    {/* password field  */}
                                    <div>

                                        <div className='flex relative'>
                                            <input className='border w-full rounded-md p-3 my-2 ' type={showPassword ? 'text' : 'password'} name="password" placeholder='Type your password' required />
                                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-6 right-2 text-lg" required>{showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                                        </div>
                                    </div>
                                    <input type="submit" value="Login" className="p-3 border hover:cursor-pointer w-full  rounded-lg bg-black text-white" />

                                    <p className='mt-2'>New Here ? Please  <Link to='/register'>
                                        <span className='text-blue-600'>
                                            <span className='underline'>Register</span>
                                        </span>
                                    </Link>

                                    </p>
                                    <SocialLogin></SocialLogin>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;