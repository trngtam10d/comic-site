import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

import { getRecentAnime } from '@/services/api/rapid';
import { Loading } from '@/components';

export default function Carousel() {
    const { isLoading, data } = getRecentAnime();

    const Carousel = data?.map((element, index) => {
        let item = element.attributes;
        return (
            <SwiperSlide key={element.id}>
                <div className="flex h-80 w-full flex-row items-end rounded-3xl bg-cover bg-center md:h-72 lg:h-80"
                    style={{
                        boxShadow: "black 50px 50px 30em 2em inset",
                        backgroundImage: `url(${item.posterImage?.original || item.posterImage?.large || item.posterImage?.small || item.posterImage?.medium})`
                    }}>
                    <div className="space-y-6 p-12">
                        <span className="text-white">#{index + 1} Spotlight</span>
                        <p className="text-3xl font-bold text-white antialiased drop-shadow-2xl lg:text-4xl">
                            {item.titles.en || item.titles.en_jp || item.titles.vi_vn}
                        </p>

                        <div className="flex w-min cursor-pointer flex-row items-center space-x-2 rounded-full bg-teal-400 px-6 py-2 text-lg font-semibold text-white shadow-lg shadow-teal-500 transition hover:scale-105 hover:bg-teal-500 hover:shadow-teal-600">
                            <span>Watch</span>
                        </div>
                    </div>
                    <div className="ml-auto inline-flex space-x-4 py-12 pr-6 xl:hidden"></div>
                </div>
            </SwiperSlide>
        );
    });

    return (
        <div className="py-6 md:px-6">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Swiper
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        autoplay={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        navigation={{
                            nextEl: ".carousel-control-next",
                        }}
                        className="carousel slide rounded-3xl"
                    >
                        {Carousel}
                        <div className="absolute right-5 bottom-12 gap-5 flex-column">
                            <div className="relative text-white w-50 h-50 opacity-1 z-10 border-0 carousel-control-next">
                                <div className="cursor-pointer h-12 w-12 bg-white p-2 transition hover:bg-gray-200 rounded-full text-center">
                                    <ArrowRightOutlined size={50} className="text-dark"/>
                                </div>
                            </div>
                        </div>
                    </Swiper>
                </>
            )}
        </div>
    )
}
