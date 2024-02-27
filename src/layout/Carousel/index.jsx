import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

import { getRecentManga } from '@/services/api/rapid';
import { Loading } from '@/components';

export default function Carousel() {
    const { isLoading, data } = getRecentManga();

    const Carousel = data?.map((element, index) => {
        let item = element.attributes;
        return (
            <SwiperSlide key={element.id}>
                <div
                    className="flex h-[300px] w-full flex-row items-end rounded-3xl bg-cover bg-left md:h-[350px] md:bg-cover md:shadow-3m shadow-3l"
                    style={{
                        backgroundImage: `url(${item.coverImage?.original || item.coverImage?.large || item.coverImage?.small || item.coverImage?.medium})`
                    }}
                >
                    <div className="space-y-6 p-8">
                        <p className="text-white">#{index + 1} Spotlight</p>
                        <p className="text-3xl font-bold text-white antialiased drop-shadow-2xl lg:text-4xl">
                            {item.titles.vi_vn || item.titles.en_jp || item.titles.en}
                        </p>

                        <div className="flex w-min cursor-pointer flex-row items-center space-x-2 rounded-tr-2xl rounded-bl-2xl bg-indigo-500 px-6 py-2 text-lg font-semibold text-white transition hover:scale-105">
                            <span>Reading</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        );
    });

    return (
        <div className="py-6 p-4">
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
                        autoplay={false}
                        modules={[Pagination, Navigation, Autoplay]}
                        navigation={{
                            nextEl: ".carousel-control-next",
                        }}
                        className="carousel slide rounded-3xl"
                    >
                        {Carousel}
                        <div className="absolute right-5 bottom-12 gap-5 flex-column">
                            <div className="relative text-white w-50 h-50 opacity-1 z-10 border-0 carousel-control-next">
                                <div className="cursor-pointer h-12 w-12 bg-indigo-500 p-2 transition hover:scale-105 rounded-full text-center">
                                    <ArrowRightOutlined size={50} />
                                </div>
                            </div>
                        </div>
                    </Swiper>
                </>
            )}
        </div>
    )
}
