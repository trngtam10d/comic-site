import PQueue from "p-queue";
import axios from "axios";

const baseURL = "https://api.jikan.moe/v4/";
const jikanQueue = new PQueue({
    concurrency: 1,
    intervalCap: 1,
    interval: 900
});

/**
 * Make a request to the Jikan API using a queue.
 * @param {string} endpoint - The API endpoint.
 * @returns {Promise} A Promise that resolves with the axios response.
 */
export async function queueRequest(endpoint) {
    return jikanQueue.add(async () => {
        try {
            return await axios.get(`${baseURL}${endpoint}`);
        } catch (error) {
            // Handle the error, log it, or throw an exception.
            console.error("Error in queueRequest:", error.message);
            // You might choose to throw the error to propagate it further.
            // throw error;
        }
    });
}