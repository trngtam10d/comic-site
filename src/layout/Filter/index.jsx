import React from 'react';

import { Loading } from '@/components';

import { Item } from '@/components';
import {
    getTopPublishingManga,
    getTopByPopularityManga,
    getTopFavoriteManga,
    getTopUpComingManga
} from '@/services/api/jikan';

export default function Filter() {
    const publishing = getTopPublishingManga();
    const upcoming = getTopUpComingManga();
    const popularity = getTopByPopularityManga();
    const favorite = getTopFavoriteManga();
    const isLoading = publishing.isLoading
        && upcoming.isLoading
        && popularity.isLoading
        && favorite.isLoading;

    return (
        <div className="flex-row space-x-4 2xl:flex border-b">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="2xl:basis-4/12">
                        <Item heading={`Top Publishing Manga`} data={publishing} key={1} />
                    </div>
                    <div className="2xl:basis-4/12">
                        <Item heading={`Top Upcoming Manga`} data={upcoming} key={2} />
                    </div>
                    <div className="2xl:basis-4/12">
                        <Item heading={`Highest Rated Manga`} data={favorite} key={3} />
                    </div>
                    <div className="2xl:basis-4/12">
                        <Item heading={`Most Popular Manga`} data={popularity} key={4} />
                    </div>
                </>
            )}
        </div>
    )
}
