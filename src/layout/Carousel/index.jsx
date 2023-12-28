import React from 'react'

const Carousel = () => {
    return (
        <div className="py-6 md:px-6">
            <div className="flex h-80 w-full flex-row items-end rounded-3xl bg-cover bg-center transition-all duration-500 ease-in-out md:h-72 lg:h-80" style={{ boxShadow: "black 0px 0px 13em 3em inset", backgroundImage: 'url("https://img.animeworld.tv/slider/101.png")' }}>
                <div className="space-y-6 p-12">
                    <p className="text-3xl font-bold text-white antialiased drop-shadow-2xl lg:text-4xl">ABC</p>
                    <div className="flex w-min cursor-pointer flex-row items-center space-x-2 rounded-full bg-teal-400 px-6 py-2 text-lg font-semibold text-white shadow-lg shadow-teal-500 transition hover:scale-105 hover:bg-teal-500 hover:shadow-teal-600">
                        <span>Watch</span>
                    </div>
                </div>
                <div className="ml-auto inline-flex space-x-4 py-12 pr-6 xl:hidden"></div>
                <div className="ml-auto hidden py-12 xl:inline-flex">
                    <div className="flex flex-row items-center space-x-6 rounded-l-3xl bg-white/30 p-5 backdrop-blur-xl backdrop-brightness-150 transition-all">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carousel
