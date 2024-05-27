import axios from "axios"
import axiosRetry from "axios-retry"

/**
 * Makes a polling request to the specified URL at a given interval.
 *
 * @param url - The URL to make the polling request to.
 * @param interval - The interval (in milliseconds) between each polling request.
 * @param maxRetry - The maximum number of retries in case of failure.
 */
export function requestPolling(url: string, interval: number, maxRetry: number) {
  try {
    axiosRetry(axios, { retries: maxRetry, retryDelay: axiosRetry.exponentialDelay })
    pollApi(url, interval)
  } catch (error: unknown) {
    console.error("Error in requestPolling:", error)
  }
}

/**
 * Polls the specified API endpoint at the given interval and logs the response data.
 *
 * @param url - The URL of the API endpoint to poll.
 * @param interval - The interval (in milliseconds) at which to poll the API.
 */
async function pollApi(url: string, interval: number) {
  while (true) {
    try {
      const response = await axios.get(url)
      console.log(response.data)
    } catch (error) {
      console.error("API request failed:", error)
    }
    await new Promise((resolve) => setTimeout(resolve, interval))
  }
}
