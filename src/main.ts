import { config } from "dotenv"
import { appSettings } from "./appSettings"
import { requestPolling } from "./requestPolling"
config()

const url = process.env.WEATHER_API_REALTIME_URL as string
requestPolling(url, appSettings.pollInterval, appSettings.maxRetry)
