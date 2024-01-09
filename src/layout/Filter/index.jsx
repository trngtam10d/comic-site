import React from 'react';

import { Loading } from '@/components';
import {
    getByPopularityManga,
    getFavoriteManga,
    getPublishingManga,
    getUpComingManga
} from '@/services/api/jikan';
import { Item } from '@/components';

export default function Filter() {
    const publishing = getPublishingManga();
    const upcoming = getUpComingManga();
    const popularity = getByPopularityManga();
    const favorite = getFavoriteManga();
    const isLoading = publishing.isLoading
        && upcoming.isLoading
        && popularity.isLoading
        && favorite.isLoading;

    return (
        <div className="flex-row space-x-4 2xl:flex border-b">
            <div className="2xl:basis-4/12">
                {isLoading ? (
                    <Loading />
                ) : (
                    <Item heading={`Top Publishing Manga`} data={publishing} key={1} />
                )}
            </div>
            <div className="2xl:basis-4/12">
                {isLoading ? (
                    <Loading />
                ) : (
                    <Item heading={`Top Upcoming Manga`} data={upcoming} key={2} />
                )}
            </div>
            <div className="2xl:basis-4/12">
                {isLoading ? (
                    <Loading />
                ) : (
                    <Item heading={`Highest Rated Manga`} data={favorite} key={3} />
                )}
            </div>
            <div className="2xl:basis-4/12">
                {isLoading ? (
                    <Loading />
                ) : (
                    <Item heading={`Most Popular Manga`} data={popularity} key={4} />
                )}
            </div>
        </div>
    )
}
