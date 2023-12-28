import React, { useState, useEffect } from 'react';
import { auth } from '@/utils/constants/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
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
        <div className="flex min-h-screen flex-col py-6 md:pl-6">
            <div className="hidden flex-1 md:inline-flex md:w-48 lg:w-64"></div>
            <div className="fixed h-full pb-16">
                <div className="hidden h-full flex-1 flex-col space-y-12 overflow-y-hidden rounded-3xl bg-white p-8 scrollbar-hide md:inline-flex md:w-48 lg:w-64">
                    <div className="flex h-full flex-1 flex-col space-y-12">
                        <ul className="space-y-1">
                            <li className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-400 hover:text-white">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> <span>Home</span>
                            </li>
                            <li className="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                <span>Popular</span>
                                <span class="h-3 w-3 self-start">
                                    <span class="inline-flex h-3 w-3 animate-ping rounded-full bg-teal-400 opacity-75"></span>
                                </span>
                            </li>
                            <li class="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                </svg>
                                <span>Genre</span>
                            </li>
                            {isLoggedIn ? (
                                <li onClick={handleLogout} class="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100">
                                    <span>Logout</span>
                                </li>
                            ) : (
                                <>
                                    <li class="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                    <li class="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
