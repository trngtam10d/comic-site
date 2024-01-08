import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';

import { getTrending } from '@/services/api/rapid';
import { Loading, Button } from '@/components';
import LazyImage from '@/utils/helpers/helpers';

export default function Trending() {
    const { isLoading, data } = getTrending();

    const TrendingList = data?.map((element, index) => {
        const item = element.attributes;
        const title = item.vi_vn || item.titles.en || item.titles.en_jp || item.titles.en_us;

        return (
            <SwiperSlide key={element.id}>
                <div className="h-[200px] relative p-2 block">
                    <div className="absolute top-0 left-0 bottom-0 w-10 flex flex-col items-center justify-end gap-y-10">
                        <p className="rotate-[270deg] whitespace-nowrap w-24 text-lg">{(title || []).length > 15 ? title.slice(0, 15) + "..." : title}</p>
                        <span className="text-lg text-teal-600 font-bold">{index > 8 ? index + 1 : "0" + (index + 1)}</span>
                    </div>
                    <a href="#" className="absolute top-0 bottom-0 left-10 w-auto">
                        <LazyImage
                            src={item.posterImage.small}
                            className="w-full h-full object-cover"
                            alt={item.title}
                        />
                    </a>
                </div>
            </SwiperSlide>
        );
    });

    return (
        <div className="z-50 space-y-8 rounded-3xl bg-background p-8">
            <div className="flex-row 2xl:flex flex">
                <div className="2xl:basis-10/12 basis-10/12">
                    <p className="text-3xl font-bold antialiased">Trending</p>
                </div>
                <div className="2xl:basis-2/12 2xl:flex 2xl:justify-center basis-2/12">
                    <Button />
                </div>
            </div>
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Swiper
                            spaceBetween={2}
                            slidesPerView={5}
                            autoplay={false}
                            breakpoints={{
                                1700: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                1600: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                1450: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                800: {
                                    slidesPerView: 4,
                                },
                                400: {
                                    slidesPerView: 3,
                                },
                                300: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Navigation]}
                            pagination={{ clickable: true }}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".pre",
                            }}
                        >
                            {TrendingList}
                        </Swiper>
                    </>
                )}
            </div>
        </div>
    )
}
