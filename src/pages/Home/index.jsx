import React, { useState } from 'react';

import { Header, Carousel, Navbar, Trending } from '@/layout';
import { Button } from '@/components';
import 'swiper/css';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="w-full md:px-6">
                <Carousel />
                <div className="flex-col space-x-4 2xl:flex border-b">
                    <div className="2xl:basis-12/12">
                        <Trending/>
                    </div>
                    <Button />
                </div>

                <div className="flex-row space-x-4 2xl:flex border-b">
                    <div className="2xl:basis-8/12">
                        <div className="z-50 space-y-8 rounded-3xl bg-background p-8">
                            <p className="text-3xl font-bold antialiased">Top Manga</p>
                        </div>
                    </div>
                    <div className="2xl:basis-4/12">
                        <div className="z-50 space-y-8 rounded-3xl bg-background p-8">
                            <p className="text-3xl font-bold antialiased">Categories</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home