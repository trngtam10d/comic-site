import React from 'react';

import { Carousel, Navbar, Trending, Filter, Type, Footer, TopCharacter } from '@/layout';
import 'swiper/css';

const Manga = () => {
    return (
        <>
            <Navbar />
            <div className="w-full">
                <Carousel />
                <div className="flex-col space-x-4 2xl:flex border-b">
                    <div className="2xl:basis-12/12">
                        <Trending />
                    </div>
                </div>

                <Filter />

                <div className="flex-row space-x-4 2xl:flex border-b">
                    <Type />
                    <div className="2xl:basis-4/12">
                        <TopCharacter />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Manga