import React, { useEffect, useRef, useState } from "react";
import LazyImage from "@/utils/helpers/helpers";
import { easeOut, motion, useInView } from "framer-motion";
import { getMangaById } from "@/services/api/jikan";
import { Loading } from "..";
import { Link } from "react-router-dom";

export default function TypeManga(props) {
    const mangaList = props.data.data?.data.map((el, index) => {
        return (
            <Card key={el.mal_id} data={el} delay={index * 0.05} />
        );
    })

    return (
        <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
            {mangaList}
        </div>
    );
}

export function MouseOverCard(props) {
    const { isLoading, data } = getMangaById(props.id);
    const manga = data?.data;
    const ref = useRef(null);

    const genre = manga?.genres?.map((genre) => {
        return (
            <Link
                className="btn-genre"
                key={genre.mal_id}
                onClick={() => window.scrollTo({ top: 0 })}
                to={`/grid/genre?id=${genre.mal_id}&name=${genre.name}`}
            >
                {genre.name}
            </Link>
        );
    });

    useEffect(() => {
        const cardRef = ref.current;
        if (ref.current) {
            cardRef.addEventListener("mouseenter", (event) => {
                event.stopPropagation();
            });
        }
    }, []);

    return (
        <div className="flex flex-col min-w-[300px] top-0 left-[70%] bg-muted-foreground p-2.5 gap-2.5 animate-spin-card border-lg backdrop-blur-xl rounded-xl z-10 absolute" ref={ref}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h1>{manga?.title || manga?.title_japanese}</h1>
                    <div className="flex justify-between">
                        <span className="flex justify-center items-center bg-[#ffdd95] font-bold text-[10px] p-card-rate text-indigo-500">
                            {manga?.score || "?"}
                        </span>
                        <span className="bg-[#b0e3af] font-bold text-[10px] p-card-rate text-indigo-500">{manga?.type || "?"}</span>
                    </div>
                    <p className="mb-1">
                        {manga?.synopsis
                            ? manga.synopsis.length > 90
                                ? manga.synopsis.slice(0, 90) + "..."
                                : manga.synopsis
                            : "?" || "?"}
                    </p>
                    <div style={{ marginBottom: 0, paddingBottom: 10 + "px" }}>
                        <p>
                            <b>Japanese:</b>{" "}
                            {manga?.title_japanese
                                ? manga.title_japanese.length > 20
                                    ? manga.title_japanese.slice(0, 20) + "..."
                                    : manga.title_japanese
                                : "?" || "?"}
                        </p>

                        <p>
                            <b>Aired:</b>
                            {manga?.aired ? manga.aired.string : "?" || "?"}
                        </p>

                        <p>
                            <b>Status:</b> {manga?.status || "?"}
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>Genre: </b>
                            {genre}
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}

export function Card(props) {
    const cardRef = useRef(null);
    const isView = useInView(cardRef);
    const [hover, setHover] = useState(false);
    const manga = props.data;
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const setSreen = () => {
            setWidth(window.innerWidth);
        };
        const listenner = window.addEventListener("resize", setSreen);
        return () => window.removeEventListener(listenner, setSreen);
    }, [
        //
    ])
    return (
        <motion.div
            className="relative text-sm w-full"
            ref={cardRef}
            initial={{ opacity: 0 }}
            animate={isView && { opacity: 1 }}
            transition={{ duration: 0.5, delay: props.delay, ease: easeOut }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}

        >
            <a className="flex flex-col no-underline min-w-full">
                <div className={`h-[200px] relative w-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-card-wrapper`}>
                    {width > 1150 && (
                        <div className={`absolute h-full w-full top-0 left-0 bg-[#343a407c] z-[3] backdrop-blur ${hover ? 'opacity-100' : 'opacity-0'}`}></div>
                    )}
                    <div className="absolute bottom-2.5	left-2.5 z-[2]">
                        <span className="bg-[#ffdd95] font-bold text-[10px] p-card-rate text-indigo-500">{manga.status || "Unknown"}</span>
                        <span className="bg-[#b0e3af] font-bold text-[10px] p-card-rate text-indigo-500">CC: {manga.chapters || "Full"}</span>
                    </div>
                    <LazyImage
                        src={manga.images.webp.large_image_url || manga.images.webp.image_url}
                        alt={manga.title}
                        className="h-[200px]  w-full object-cover"
                    />
                </div>
                <div className="ps-2.5 pe-2.5 pb-2.5 bg-[#343a40]">
                    <span className="block mb-1 whitespace-nowrap text-ellipsis w-full text-white">
                        {manga.title_english?.length > 18 ? manga.title_english?.slice(0, 18) + "..."
                            : manga.title_english || manga.title.length > 18 ? manga.title?.slice(0, 18)
                                : manga.title}
                    </span>
                    <div className="text-gray-200">
                        <span>#{manga.score}</span>
                        <div className="w-1 h-1 rounded-full bg-indigo-500 inline-block m-dot"></div>
                        <span className="ml-1">{manga.type}</span>
                    </div>
                </div>
            </a>
            {width > 1150 && hover && manga && (
                <MouseOverCard id={manga.mal_id} />
            )}
        </motion.div>
    );
}