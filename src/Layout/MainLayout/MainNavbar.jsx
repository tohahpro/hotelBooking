import { Link, NavLink } from "react-router-dom";
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import { LuLogOut } from 'react-icons/lu';
// import { FiLogIn } from 'react-icons/fi';
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";







const MainNavbar = () => {

    const { user, logout } = useAuth()
    const [open, setOpen] = useState(false)

    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')


    const [theme, setTheme] = useState('light-theme')




    const handleClick = () => {
        console.log('click');
        if (theme === 'dark-theme') {
            setTheme('light-theme')
        }
        else {
            setTheme('dark-theme')
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])





    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#9ba8f4e5')
                setTextColor('#FFFFFF')
            }
            else {
                setColor('#000000')
                setTextColor('#FFFFFF')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

    return (
        <div>
            <nav style={{ backgroundColor: `${color}` }}
                className="left-0 right-0 fixed items-center justify-between lg:w-full z-10 ease-in duration-300 lg:px-56 py-2">


                <div className="flex items-center justify-between">
                    <Link to='/'>
                        <div className="flex items-center pl-2">
                            <h2 className="text-2xl lg:text-4xl font-bold text-blue-400">Logo</h2>
                        </div>
                    </Link>


                    <div className="lg:hidden justify-end text-2xl pr-2 text-white" onClick={() => setOpen(!open)}>
                        {
                            open === true ? <BiMenuAltRight></BiMenuAltRight> : <BiMenu></BiMenu>
                        }
                    </div>

                    <div
                        style={{ color: `${textColor}` }}
                        className={`
                        absolute lg:flex flex-wrap mt-64 lg:m-0 w-full lg:w-fit p-8 lg:p-0 bg-black/80 duration-4000 ${open ? ' ' : 'hidden'} lg:static lg:bg-transparent text-center text-white lg:text-black space-y-2 z-20`}
                    >
                        <ul className="lg:flex lg:gap-12 items-center  z-70 text-lg font-semibold lg:pr-6">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#E96D17] underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addProduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#67B6F4] underline" : ""
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/my-bookings"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#67B6F4] underline" : ""
                                    }
                                >
                                    My Bookings
                                </NavLink>
                            </li>
                        </ul>

                        <>
                            {
                                user ?

                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-24 rounded-full border">
                                                {
                                                    user?.photoURL ? <img src={user.photoURL}
                                                        alt="" /> : 'B'
                                                }
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-40 md:w-52 text-2xl font-medium bg-black/80 text-white">
                                            <li>
                                                <a className="justify-between">
                                                    {user?.displayName}
                                                </a>
                                            </li>

                                            <li>
                                                <button className="py-2 px-3 hover:text-white flex items-center" onClick={logout}>Logout
                                                    <LuLogOut className="font-bold text-base"></LuLogOut>
                                                </button>
                                            </li>

                                            <label
                                                className="swap swap-rotate pb-2">

                                                {/* this hidden checkbox controls the state */}
                                                <input onClick={handleClick} type="checkbox" />

                                                {/* sun icon */}
                                                <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                                {/* moon icon */}
                                                <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                            </label>


                                        </ul>
                                    </div> :


                                    <ul className="lg:flex items-center gap-4">
                                        <li className="text-lg font-semibold pb-2">
                                            <NavLink
                                                to='/login'
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#67B6F4] underline" : ""
                                                }
                                            >LogIn
                                            </NavLink>
                                        </li>

                                        <li>
                                            <label
                                                className="swap swap-rotate pb-2">

                                                {/* this hidden checkbox controls the state */}
                                                <input onClick={handleClick} type="checkbox" />

                                                {/* sun icon */}
                                                <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                                {/* moon icon */}
                                                <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                            </label>
                                        </li>
                                    </ul>

                            }
                        </>

                    </div>
                </div>

            </nav >

        </div >
    );
};

export default MainNavbar;