import React, { useState, useEffect } from 'react';
import { auth } from '@/utils/constants/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import SideNav from './Side';
import { ToggleDarkMode } from '@/components';

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
        <nav className="sticky top-0 py-3 px-2 bg-background border-b shadow-sm z-10">
            <div className="flex items-center max-w-6xl mx-auto justify-between">
                <SideNav/>
                <div className=" flex items-center space-x-3">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-tr-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 space-x-3 w-full" type="button">
                        <span className="lg:inline hidden">Search manga... </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 lg:mr-2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </button>
                    <ToggleDarkMode />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
