import { NavLink } from "react-router-dom";

import { BiMenuAltRight, BiMenu } from 'react-icons/bi';
import { useContext, useState } from "react";

import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const { user, logout } = useContext(AuthContext)


    return (
        <div>
            <nav className="flex lg:items-center justify-between py-7 lg:px-56">

                {/* brand logo  */}
                <div>
                    <h2 className="text-4xl font-extrabold">Logo</h2>
                </div>


                {/* mobile view icon  */}

                <div className="flex lg:hidden justify-end text-2xl pr-2 text-slate-400 mt-4" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <BiMenuAltRight></BiMenuAltRight> : <BiMenu></BiMenu>
                    }
                </div>

                <div
                    className={`absolute lg:flex mt-12 w-full px-6 py-5 bg-black lg:m-0  lg:p-0 duration-2000
                     ${open ? ' ' : 'hidden'} lg:static 
                     lg:bg-transparent text-center space-y-2`}
                >
                    <ul className="mx-auto text-lg font-semibold lg:flex gap-8">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF3811] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/all-rooms"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF3811] underline" : ""
                                }
                            >
                                All Room
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF3811] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF3811] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF3811] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>


                    {/* large view hidden and mobile view flex  */}
                    <div className="lg:hidden lg:gap-5 space-y-2 text-white">
                        {
                            user ?
                                <>
                                    <div className="flex justify-center">

                                    </div>
                                    <div className="flex justify-center">
                                        <button className="font-medium px-6 py-2 border rounded-md mx-auto" onClick={logout}>Logout</button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="flex justify-center">


                                        <NavLink
                                            to="/login"
                                            className={({ isActive }) =>
                                                isActive ? 'px-6 py-2 border rounded-md mx-auto bg-blue-400 text-white font-medium' : 'font-medium px-6 py-2 border rounded-md mx-auto'
                                            }
                                        >
                                            Login
                                        </NavLink>
                                    </div>
                                </>
                        }
                    </div>

                </div>

                {/* mobile view hidden  */}
                <div className="hidden lg:flex items-center lg:gap-5 space-y-2">


                    <div className="flex justify-center">
                        {
                            user ?


                                <>
                                    <div className="flex justify-center items-center mr-4">
                                        <p className="font-medium">{user.email}</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="font-medium px-6 py-2 border rounded-md mx-auto" onClick={logout}>Logout</button>
                                    </div>
                                </>



                                :

                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? 'px-6 py-2 border rounded-md mx-auto bg-blue-400 text-white font-medium' : 'font-medium px-6 py-2 border rounded-md mx-auto'
                                    }
                                >
                                    Login
                                </NavLink>


                        }
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;