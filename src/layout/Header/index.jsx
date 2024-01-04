import React, { useState, useEffect } from 'react';
import { auth } from '@/utils/constants/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [isLoggedIn, setLogin] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogin(true)
            } else {
                // User is signed out
                setLogin(false)
            }
        });

    }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="hidden flex flex-row items-center md:pr-6">
            <div className="mr-6 self-center text-left">
                <div className="relative inline-block text-left">
                    <div>
                        <button onClick={() => setOpen(!open)} className="inline-flex justify-center rounded-full bg-indigo-500 px-4 py-2 shadow-xl shadow-indigo-100 transition hover:scale-105 hover:bg-indigo-600 hover:shadow-indigo-200 focus:outline-none md:hidden" id="headlessui-menu-button-18" type="button" aria-haspopup="true" aria-expanded="false">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden="true" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </button>
                    </div>
                    {open ? (
                        <div className="absolute left-0 z-10 mt-4 w-56 origin-top-left divide-y divide-gray-100 rounded-xl bg-background shadow-xl focus:outline-none" aria-labelledby="headlessui-menu-button-18" id="headlessui-menu-items-67" role="menu">
                            <div className="space-y-2 p-4" role="none">
                                <li className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-400 hover:text-white" role="none">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" role="none">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" role="none"></path>
                                        <polyline points="9 22 9 12 15 12 15 22" role="none"></polyline>
                                    </svg>
                                    <span role="none">Home</span>
                                </li>
                                <li className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100" role="none">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" role="none">
                                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" role="none"></polyline>
                                        <polyline points="17 6 23 6 23 12" role="none"></polyline>
                                    </svg>
                                    <span role="none">Popular</span>
                                    <span className="h-3 w-3 self-start" role="none">
                                        <span className="inline-flex h-3 w-3 animate-ping rounded-full bg-teal-400 opacity-75" role="none"></span>
                                    </span>
                                </li>
                                <li className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100" role="none">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" role="none">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2" role="none"></polygon>
                                        <polyline points="2 17 12 22 22 17" role="none"></polyline>
                                        <polyline points="2 12 12 17 22 12" role="none">
                                        </polyline>
                                    </svg>
                                    <span role="none">Genre</span>
                                </li>
                                {isLoggedIn ? (
                                    <li onClick={handleLogout} className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100">
                                        <span>Logout</span>
                                    </li>
                                ) : (
                                    <>
                                        <li className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-label="Login"
                                            >
                                                <path d="M4 19.5A2.5 2.5 0 0 1 1.5 17C1.5 14.239 7 13 12 13s10.5 1.239 10.5 4a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 4 19.5zM12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path>
                                                <polyline points="16 2 12 6 8 2"></polyline>
                                            </svg>
                                            <a href="/signin">SignIn</a>
                                        </li>
                                        <li className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-label="Login"
                                            >
                                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                                <circle cx="12" cy="15" r="3"></circle>
                                            </svg>
                                            <a href="/signup">SignUp</a>
                                        </li>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (<></>)}

                </div>
            </div>
        </div>
    )
}

export default Header