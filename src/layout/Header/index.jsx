import React, { useState, useEffect } from 'react';
import { auth } from '@/utils/constants/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <a href={NavLink} className="flex py-2 text-base font-medium text-dark dark:text-dark hover:text-primary lg:ml-10 lg:inline-flex">
                    {children}
                </a>
            </li>
        </>
    );
};

const SingleImage = ({ href, imgSrc }) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </a>
        </>
    );
};


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
        // <header className={`absolute top-0 left-0 z-50 w-full`}>
        //     <div className="container mx-auto">
        //         <div className="relative flex items-center justify-between -mx-4">
        //             <div className="w-60 max-w-full px-4">
        //                 <a href="/#" className="block w-full py-5">
        //                     <img src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
        //                         alt="logo"
        //                         className="w-full dark:block"
        //                     />
        //                     <img src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
        //                         alt="logo"
        //                         className="w-full hidden dark:hidden"
        //                     />
        //                 </a>
        //             </div>
        //             <div className="flex w-full items-center justify-between px-4">
        //                 <div>
        //                     <button onClick={() => setOpen(!open)} id="navbarToggler" className={` ${open && "navbarTogglerActive"} absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}>
        //                         <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark"></span>
        //                         <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark"></span>
        //                         <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark"></span>
        //                     </button>
        //                     <nav id="navbarCollapse" className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"} `}>
        //                         <ul className="block lg:flex">
        //                             <ListItem NavLink="/#">Home</ListItem>
        //                             <ListItem NavLink="/#">Payment</ListItem>
        //                             <ListItem NavLink="/#">About</ListItem>
        //                             <ListItem NavLink="/#">Blog</ListItem>
        //                         </ul>
        //                     </nav>
        //                 </div>
        //                 {isLoggedIn ? (
        //                     <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
        //                         <a className="py-3 text-base font-medium px-7 text-dark dark:text-dark hover:text-primary" onClick={handleLogout}>
        //                             Logout
        //                         </a>
        //                     </div>
        //                 ) : (
        //                     <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
        //                         <a href="/signin" className="py-3 text-base font-medium px-7 text-dark dark:text-dark hover:text-primary">
        //                             Sign in
        //                         </a>

        //                         <a href="/signup" className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90">
        //                             Sign Up
        //                         </a>
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </header>
        <div className="flex flex-row items-center md:pr-6">
            <div className="mr-6 self-center text-left">
                <div className="relative inline-block text-left">
                    <div>
                        <button class="inline-flex justify-center rounded-full bg-indigo-500 px-4 py-2 shadow-xl shadow-indigo-100 transition hover:scale-105 hover:bg-indigo-600 hover:shadow-indigo-200 focus:outline-none md:hidden" id="headlessui-menu-button-18" type="button" aria-haspopup="true" aria-expanded="false">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-white" aria-hidden="true" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </button>
                    </div>
                    <div class="absolute left-0 z-10 mt-4 w-56 origin-top-left divide-y divide-gray-100 rounded-xl bg-white shadow-xl focus:outline-none" aria-labelledby="headlessui-menu-button-18" id="headlessui-menu-items-67" role="menu" tabindex="0"><div class="space-y-2 p-4" role="none"><li class="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-400 hover:text-white" role="none"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" role="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" role="none"></path><polyline points="9 22 9 12 15 12 15 22" role="none"></polyline></svg> <span role="none">Home</span></li><li class="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100" role="none"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" role="none"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" role="none"></polyline><polyline points="17 6 23 6 23 12" role="none"></polyline></svg> <span role="none">Popular</span><span class="h-3 w-3 self-start" role="none"><span class="inline-flex h-3 w-3 animate-ping rounded-full bg-teal-400 opacity-75" role="none"></span></span></li><li class="flex cursor-pointer flex-row items-center space-x-3 rounded-lg p-2 text-lg font-medium text-gray-600 transition ease-in-out hover:-translate-y-1 hover:bg-indigo-100" role="none"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" role="none"><polygon points="12 2 2 7 12 12 22 7 12 2" role="none"></polygon><polyline points="2 17 12 22 22 17" role="none"></polyline><polyline points="2 12 12 17 22 12" role="none"></polyline></svg> <span role="none">Genre</span></li></div></div>
                </div>
            </div>
            <div className="mr-10 hidden w-min rounded-l-3xl rounded-tr-3xl bg-teal-400 px-3 py-2 text-xl font-bold text-white shadow-lg shadow-teal-200 lg:inline-flex">
                Welcome!
            </div>

            <div className="relative z-50 mt-1 w-full md:w-2/5">
                <div className="relative w-full cursor-default overflow-hidden rounded-full bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <input autocomplete="off" class="w-full border-none bg-gray-300 py-3 pl-3 pr-10 text-sm leading-5 text-gray-800 outline-none focus:ring-0" placeholder="Search..." id="headlessui-combobox-input-19" role="combobox" type="text" aria-expanded="false" />
                    <button class="absolute inset-y-0 right-0 flex items-center pr-3" id="headlessui-combobox-button-20" type="button" tabindex="-1" aria-haspopup="true" aria-expanded="false"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-gray-400" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                </div>
            </div>

            <div className="ml-auto flex flex-row items-center space-x-5">
                <div className="hidden cursor-pointer flex-row items-center space-x-2 rounded-full bg-gradient-to-tl from-teal-200 via-indigo-500 to-teal-200 bg-size-200 bg-pos-0 px-6 py-2 text-white shadow-lg shadow-teal-100 transition-all duration-300 hover:scale-105 hover:bg-pos-100 hover:shadow-teal-200 md:inline-flex">
                    <span className="text-lg font-semibold">Saved</span>
                </div>
            </div>
        </div>
    )
}

export default Header