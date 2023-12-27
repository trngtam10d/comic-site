import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';

import { Header, Footer, Navbar } from '@/layout'
import { auth } from '@/utils/constants/firebase';

const Home = () => {
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
        <div>
            <Header />
            <nav className="p-1">
                <p>
                    Welcome Home
                </p>

                {isLoggedIn ? (
                    <div>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <NavLink to="/signin">
                            Login
                        </NavLink>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Home