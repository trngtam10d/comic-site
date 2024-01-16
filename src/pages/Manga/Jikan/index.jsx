import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Footer, Navbar, Recommended, TopCharacter } from '@/layout';
import { getMangaById } from '@/services/api/jikan';
import { EyeFilled, HeartFilled, StarFilled } from '@ant-design/icons';
import { Loading } from '@/components';

const Jikan = () => {
    const [descIsCollapsed, setDescIsCollapsed] = useState(true);
    const param = useParams();
    const { data, isLoading } = getMangaById(param.id);
    const mainObj = data?.data;

    const genres = mainObj?.genres.map((genre) => {
        return (
            <Link className="btn-genre" key={genre.mal_id} to={``}>
                {genre.name}
            </Link>
        );
    });

    return (
        <>
            <Navbar />
            <div className="w-full py-4">
                {!isLoading ? (
                    <div className="relative py-4">
                        <div className="flex md:justify-between md:flex-wrap md:items-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:bg-[rgba(93,93,93,.701)] after:backdrop-blur-xl">
                            <div className="max-w-primary md:p-[40px] p-3">
                                <img className="absolute z-[-1] top-0 left-0 w-full h-full object-cover" src={mainObj.images.webp.large_image_url || mainObj.images.webp.image_url} />
                                <div className="flex gap-[20px] md:flex-row flex-col">
                                    <img src={mainObj.images.webp.large_image_url || mainObj.images.webp.image_url} alt="" className="h-[250px]" />
                                    <div className="flex gap-7 flex-col">
                                        <h1 className="font-lg text-lg">{mainObj.title_english || mainObj.title}</h1>
                                        <div className="gap-0.5 flex items-center">
                                            <span className="p-2 leading-3 text-xs flex items-center justify-center bg-[#ffdd95] text-black"><StarFilled /> {mainObj.rank || "N/A"}</span>
                                            <span className="p-2 leading-3 text-xs flex items-center justify-center bg-[#e3b5cd] text-black"><HeartFilled /> {mainObj.favorites || "N/A"}</span>
                                            <span className="p-2 leading-3 text-xs flex items-center justify-center bg-[#b0e3af] text-black"><EyeFilled /> {mainObj.members || "N/A"}</span>
                                        </div>
                                        <div className="flex gap-2.5">
                                            <div className="flex items-center space-x-2 rounded-tr-2xl rounded-bl-2xl bg-indigo-500 px-6 py-2 font-semibold transition hover:scale-105">
                                                <Link to={``}>Read Now</Link>
                                            </div>
                                        </div>

                                        <p>
                                            {
                                                mainObj?.synopsis
                                                    ? descIsCollapsed
                                                        ? mainObj.synopsis?.slice(0, 200) + "..."
                                                        : mainObj.synopsis
                                                    : "NA"
                                            }
                                            <span className="cursor-pointer" onClick={() => setDescIsCollapsed((prev) => !prev)}>[ {descIsCollapsed ? "More" : "Less"} ]</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:max-w-secondary md:flex md:flex-col md:grow md:z-[1] md:p-5 p-2">
                                <div className="border-b mb-5">
                                    <p><b>Japanese:</b> 君の名は。</p>
                                    <p><b>Synonyms:</b> N/A</p>
                                    <p><b>Aired:</b>Aug 26, 2016</p>
                                    <p><b>Duration:</b> 1 hr 46 min</p>
                                    <p><b>Score:</b> 8.84</p>
                                    <p><b>Status:</b> Finished Airing</p>
                                    <p><b>Premiered:</b> Season: ? Year: ?</p>
                                </div>
                                <div className="border-b">
                                    <p className="mb-5">
                                        <b>Genre: </b>
                                        {genres}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loading />
                )}

                <div className="flex-row space-x-4 2xl:flex border-b">
                    <div className="2xl:basis-8/12">
                        <Recommended />
                    </div>
                    <div className="2xl:basis-4/12">
                        <TopCharacter />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Jikan;