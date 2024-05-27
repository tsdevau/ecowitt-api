import { config } from "dotenv"
import type { Config } from "drizzle-kit"
config()

export default {
  dialect: "postgresql",
  dbCredentials: { url: process.env.WEATHER_DB_URL as string },
  schema: "./src/dbSchema.ts",
  out: "./drizzle",
} satisfies Config
