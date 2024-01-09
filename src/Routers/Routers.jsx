import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, SignIn, SignUp, Manga } from '@/pages';
import { Spinner } from '@/components';


export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-2 py-2 my-2 space-y-2 min-h-screen">
            {!loading ? (
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/mange" element={<Manga />} />
                    </Routes>
                </Router>
            ) : ( <Spinner/> )}

        </div>
    );
};