import axios from 'axios';
import { useQuery } from 'react-query';

import anime from '../data';
const url = "https://kitsu.io/api";

export function getRecentAnime() {
    const queryObj = useQuery("", async () => {
        return await axios
            .get(url + `/edge/anime?filter[status]=current&sort=-averageRating`)
            .catch((error) => {
                return { data: anime, isLoading: false };
            })
    });
    const result = queryObj.isError ? anime.data : queryObj.data?.data.data;
    return { isLoading: queryObj.isLoading, data: result };
}