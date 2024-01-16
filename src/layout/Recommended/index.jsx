import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { Link, useParams } from 'react-router-dom';

import { Loading, Button } from '@/components';
import LazyImage from '@/utils/helpers/helpers';
import { getMangaRecommendationsById } from '@/services/api/jikan';
import { Card } from '@/components/TypeManga';

export default function Recommended() {
    const param = useParams();
    const { data, isLoading } = getMangaRecommendationsById(param.id);

    const mangaList = data?.data.map((el, index) => {
        return (
            <Card key={el.entry.mal_id} data={el.entry} delay={index * 0.05} />
        );
    })

    return (
        <div className="2xl:basis-8/12">
            <div className="space-y-8 bg-card p-4">
                <div className="text-xl font-bold antialiased">Recommended for you</div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
                        {mangaList}
                    </div>
                )}

            </div>
        </div>

    );
}
