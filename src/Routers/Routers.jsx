import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Comic } from '@/pages';

const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/comic" element={<Comic />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Routers;