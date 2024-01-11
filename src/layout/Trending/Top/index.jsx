import React, { useState } from 'react';

import LazyImage from '@/utils/helpers/helpers';
import { LikeOutlined } from '@ant-design/icons';
import { getTopCharacters } from '@/services/api/jikan';
import { Loading } from '@/components';

export default function TopCharacter() {
    const { isLoading, data } = getTopCharacters();

    const characters = data?.data.map((el, index) => {
        return (
            <div className="flex items-center p-2.5 border-b gap-4" key={el.mal_id}>
                <span className={`text-2xl w-7 text-center ${0 < index + 1 && index + 1 <= 3 ? "characters" : ""}`}>
                    {index + 1}
                </span>
                <div className="flex flex-row gap-2.5">
                    <LazyImage
                        src={el.images.webp.image_url}
                        alt={el.name}
                        className="h-20 min-w-14 rounded overflow-hidden object-cover"
                    />
                    <div className="flex flex-col p-2 gap-2.5">
                        <span>
                            <a href={el.url} className="no-underline hover:text-indigo-500">{el.name}</a>
                        </span>
                        <div className="flex text-xs">
                            <span className="text-[10px] bg-indigo-500 px-1 py-1 font-bold flex items-center justify-center">
                                <LikeOutlined className="p-0" />
                                {el.favorites}
                            </span>
                        </div>
                        <p className="text-xs">
                            <b>BIO: </b>
                            {el.about.slice(0, 50)}...
                        </p>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <>
            <div className="space-y-8 bg-card p-8">
                <div className="text-xl font-bold antialiased">Top Characters (MyAnimeList)</div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="grid grid-cols-1 gap-2">
                        {characters}
                    </div>
                )}
            </div>
        </>
    )
}
