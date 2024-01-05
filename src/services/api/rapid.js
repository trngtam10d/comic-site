import axios from 'axios';
import { useQuery } from 'react-query';

import jsonData from '../data';
const url = "https://kitsu.io/api";

export function getRecentManga() {
    const queryObj = useQuery("search", async () => {
        return await axios
            .get(url + `/edge/manga?filter[status]=current&sort=-averageRating`)
            .catch((error) => {
                return { data: jsonData, isLoading: false };
            })
    });
    const result = queryObj.isError ? jsonData.data : queryObj.data?.data.data;
    return { isLoading: queryObj.isLoading, data: result };
}

export function getTrending() {
    const queryObj = useQuery("trending", async () => {
        return await axios
            .get(url + `/edge/trending/manga`)
            .catch((error) => {
                return { data: jsonData, isLoading: false };
            })
    });
    const result = queryObj.isError ? jsonData.data : queryObj.data?.data.data;
    return { isLoading: queryObj.isLoading, data: result };
}