import React, { useState } from 'react';

import { Loading, TypeManga } from '@/components';
import {
    getTopDoujin,
    getTopLightNovel,
    getTopManga,
    getTopManhua,
    getTopManhwa,
    getTopNovel,
    getTopOneShot
} from '@/services/api/jikan';

const Type = () => {
    const [selector, setSelector] = useState(1);

    const typeMap = {
        1: getTopManga,
        2: getTopNovel,
        3: getTopLightNovel,
        4: getTopOneShot,
        5: getTopDoujin,
        6: getTopManhwa,
        7: getTopManhua, // Please update this to getTopManhua if it's a typo
    };

    const typeName = {
        1: 'Manga',
        2: 'Novel',
        3: 'Light Novel',
        4: 'One-shot',
        5: 'Donjin',
        6: 'Manhwa',
        7: 'Manhua',
    };

    const RenderTyManga = ({ option }) => {
        const typeData = typeMap[option]();
        if (typeData.isLoading) {
            return <Loading />
        } else {
            return <TypeManga data={typeData} />;
        }
    };

    return (
        <div className="2xl:basis-8/12">
            <div className="space-y-8 bg-card p-4">
                <div className="flex-row 2xl:flex flex">
                    <div className="2xl:basis-3/12 basis-4/12">
                        <div className="text-xl font-bold antialiased">Top {typeName[selector]}</div>
                    </div>
                    <div className="2xl:basis-9/12 2xl:flex 2xl:justify-end basis-8/12">
                        <div className="text-xs md:border flex rounded-full flex-wrap justify-end">
                            {[1, 2, 3, 4, 5, 6, 7].map((type) => (
                                <button
                                    key={type}
                                    className={`p-tab border ${selector === type ? "selected" : ""} 
                                        ${type === 1 ? "first:rounded-first" : ""} 
                                        ${type === 7 ? "last:rounded-last" : ""}`}
                                    onClick={() => setSelector(type)}
                                >
                                    {typeName[type]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <RenderTyManga option={selector} />
            </div>
        </div>
    );
};

export default Type;