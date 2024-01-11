import { useQuery } from "react-query";

import { queueRequest } from "@/utils/constants/queue";

const config = { staleTime: 2.1 * 60 * 1000 }

function execute(key, endpoint) {
    return useQuery(key, async () => {
        return await queueRequest(endpoint);
    }, config)
}

export function handleResponse(key, endpoint) {
    const response = execute(key, endpoint);
    return { data: response.data?.data, isLoading: response.isLoading, isError: response.isError };
}

export function getTopPublishingManga() {
    return handleResponse('publishing', "top/manga?filter=publishing&limit=4")
}

export function getTopUpComingManga() {
    return handleResponse('upcoming', "top/manga?filter=upcoming&limit=4")
}

export function getTopByPopularityManga() {
    return handleResponse('bypopularity', "top/manga?filter=bypopularity&limit=4")
}

export function getTopFavoriteManga() {
    return handleResponse('favorite', "top/manga?filter=favorite&limit=4")
}

// Filter
export function getTopManga() {
    return handleResponse('type_manga', "top/manga?filter=bypopularity&type=manga&limit=12")
}

export function getTopDoujin() {
    return handleResponse('type_doujin', "top/manga?filter=bypopularity&type=doujin&limit=12")
}

export function getTopManhwa() {
    return handleResponse('type_manhwa', "top/manga?filter=bypopularity&type=manhwa&limit=12")
}

export function getTopNovel() {
    return handleResponse('type_novel', "top/manga?filter=bypopularity&type=novel&limit=12")
}

export function getTopLightNovel() {
    return handleResponse('type_lightnovel', "top/manga?filter=bypopularity&type=lightnovel&limit=12")
}

export function getTopOneShot() {
    return handleResponse('type_oneshot', "top/manga?filter=bypopularity&type=oneshot&limit=12")
}

export function getTopManhua() {
    return handleResponse('type_manhua', "top/manga?filter=bypopularity&type=manhua&limit=12")
}

export function getMangaById(id) {
    return handleResponse(`manga-${id}`, `manga/${id}`);
}

export function getTopCharacters() {
    return handleResponse('characters', "top/characters?limit=6");
}