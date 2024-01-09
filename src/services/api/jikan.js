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

export function getPublishingManga() {
    return handleResponse('publishing', "top/manga?filter=publishing&limit=4")
}

export function getUpComingManga() {
    return handleResponse('upcoming', "top/manga?filter=upcoming&limit=4")
}

export function getByPopularityManga() {
    return handleResponse('bypopularity', "top/manga?filter=bypopularity&limit=4")
}

export function getFavoriteManga() {
    return handleResponse('favorite', "top/manga?filter=favorite&limit=4")
}

