import React from 'react';

import { Carousel, Navbar, Trending, Filter, Type, Footer } from '@/layout';
import 'swiper/css';

const Manga = () => {
    return (
        <>
            <Navbar />
            <div className="w-full md:px-6 md:py-6">
                <Carousel />
                <div className="flex-col space-x-4 2xl:flex border-b">
                    <div className="2xl:basis-12/12">
                        <Trending />
                    </div>
                </div>

                <Filter />

                <Type />

                <Footer />
            </div>
        </>
    )
}

export default Manga