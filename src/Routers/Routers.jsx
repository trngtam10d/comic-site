import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Comic, SignIn, SignUp } from '@/pages';

const Routers = () => {
    return (
        <div className="min-h-screen bg-gray-200 selection:bg-sky-400 selection:text-white">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/comic" element={<Comic />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Routers;