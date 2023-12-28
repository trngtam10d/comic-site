import React, { useState } from 'react';

import { Header, Navbar, Carousel } from '@/layout';
import { Button } from '@/components';

const Home = () => {
    return (
        <div className="flex flex-row scroll-smooth">
            <Navbar/>

            <div className="w-full p-6 md:p-10">
                <Header/>

                <Carousel/>
                <img className="h-16 translate-y-5 object-contain" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61c717ae-3d90-4186-bbef-9a7191eb6146/ddmainq-d4eb464c-826f-45e2-aed3-65b216ec12c8.png/v1/fill/w_891,h_720,strp/zenitsu_agatsuma_render___kimersu_no_yaiba_by_guntersw_ddmainq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNjFjNzE3YWUtM2Q5MC00MTg2LWJiZWYtOWE3MTkxZWI2MTQ2XC9kZG1haW5xLWQ0ZWI0NjRjLTgyNmYtNDVlMi1hZWQzLTY1YjIxNmVjMTJjOC5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zDQ6eyN_1iGepS-buOb9y83KvMdxEPMk6HCCjl2AyQY" alt="Zenitsu" />
                <div className="space-y-6 md:px-6">
                    <div className="flex-row space-x-4 2xl:flex">
                        <div className="2xl:basis-9/12">
                            <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
                                <p className="text-3xl font-bold text-gray-700 antialiased">Lastest Episodes</p>
                                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 md+:grid-cols-3 lgc:grid-cols-2 xlc:grid-cols-3 2xlc:grid-cols-3 3xlc:grid-cols-5"></div>
                                <Button/>
                            </div>
                        </div>
                        <div className="hidden 2xl:inline 2xl:basis-1/4">
                            <div className="w-full space-y-8 rounded-3xl bg-indigo-500 p-8">
                                <p className="text-3xl font-bold text-white antialiased">TOP</p>
                                <div className="grid grid-cols-1 space-y-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1">
                                    <div className="flex flex-row self-end">
                                        <div className="self-center rounded-l-xl border-y-4 border-l-4 border-indigo-200 px-3 py-2 text-2xl text-indigo-200">1</div>
                                        <img className="h-40 cursor-pointer rounded-xl transition hover:scale-105 hover:saturate-150" src="https://media.kitsu.io/anime/poster_images/7442/tiny.jpg" alt="Attack on Titan top" />
                                        <div className="inline-flex flex-col space-y-1 pl-4 2xl:hidden 3xlc:inline-flex">
                                            <span className="text-lg font-semibold text-white antialiased line-clamp-2">Attack on Titan</span>
                                            <div className="flex flex-row">
                                                <span className="mr-4 flex flex-row items-center text-white">
                                                    <svg stroke="currentColor" fill="white" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> 84.88</span>
                                                <span className="flex flex-row items-center text-white"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg> 25</span>
                                            </div>
                                            <a href="https://www.youtube.com/watch?v=LHtdKWJdif4" target="_blank" className="w-min cursor-pointer rounded-xl bg-red-500 px-4 py-2 text-white shadow-lg shadow-red-400 transition hover:scale-105 hover:bg-red-600"><svg stroke="currentColor" fill="white" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></a>
                                        </div>
                                    </div>

                                    <img className="mx-auto h-72 object-contain" src="https://i.pinimg.com/originals/17/37/21/173721246ff8546baedb7ef457f9d2c1.png" alt="Goku &amp; Vegeta" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="z-50 space-y-8 rounded-3xl bg-white p-8">
                        <p className="text-3xl font-bold text-gray-700 antialiased">New</p>
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 md+:grid-cols-3 lgc:grid-cols-2 xlc:grid-cols-4 2xlc:grid-cols-5 3xlc:grid-cols-6"></div>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home