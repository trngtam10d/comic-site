import React from 'react';

import { Carousel, Navbar, Trending, Filter, Type, Footer, Error } from '@/layout';
import 'swiper/css';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="w-full md:px-6 md:py-6">
                <Error />
                <Footer />
            </div>
        </>
    )
}

export default Home