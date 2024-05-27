import { decimal, integer, pgTable, serial, timestamp } from "drizzle-orm/pg-core"

export const outdoor = pgTable("outdoor", {
  id: serial("id").primaryKey(),
  temperature: integer("temperature").references(() => temperature.id),
  feelsLike: integer("feels_like").references(() => feelsLike.id),
  appTemp: integer("app_temp").references(() => appTemp.id),
  dewPoint: integer("dew_point").references(() => dewPoint.id),
  humidity: integer("humidity").references(() => humidity.id),
  batteryHapticArray: integer("battery_haptic_array").references(() => batteries.id),
  batteryHapticCapacitor: integer("battery_haptic_capacitor").references(() => batteries.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const indoor = pgTable("indoor", {
  id: serial("id").primaryKey(),
  temperature: integer("temperature").references(() => temperature.id),
  humidity: integer("humidity").references(() => humidity.id),
  battery: integer("battery").references(() => batteries.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const solarUvi = pgTable("solar_uvi", {
  id: serial("id").primaryKey(),
  solar: integer("solar").references(() => solar.id),
  uvi: integer("uvi").references(() => uvi.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const rainfallPiezo = pgTable("rainfall_piezo", {
  id: serial("id").primaryKey(),
  rate: integer("rate").references(() => rainRate.id),
  daily: integer("daily").references(() => rainDaily.id),
  event: integer("event").references(() => rainEvent.id),
  hourly: integer("hourly").references(() => rainHourly.id),
  weekly: integer("weekly").references(() => rainWeekly.id),
  monthly: integer("monthly").references(() => rainMonthly.id),
  yearly: integer("yearly").references(() => rainYearly.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const wind = pgTable("wind", {
  id: serial("id").primaryKey(),
  speed: integer("speed").references(() => windSpeed.id),
  gust: integer("gust").references(() => windGust.id),
  direction: integer("direction").references(() => windDirection.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const pressure = pgTable("pressure", {
  id: serial("id").primaryKey(),
  absolute: integer("absolute").references(() => pressureAbsolute.id),
  relative: integer("relative").references(() => pressureRelative.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const lightning = pgTable("lightning", {
  id: serial("id").primaryKey(),
  count: integer("count").references(() => lightningCount.id),
  distance: integer("distance").references(() => lightningDistance.id),
  battery: integer("battery").references(() => batteries.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const soilCh1 = pgTable("soil_ch1", {
  id: serial("id").primaryKey(),
  moisture: integer("moisture").references(() => soilMoisture.id),
  ad: integer("ad").references(() => soilAd.id),
  battery: integer("battery").references(() => batteries.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const tempHumidityCh1 = pgTable("temp_humidity_ch1", {
  id: serial("id").primaryKey(),
  temperature: integer("temperature").references(() => temperature.id),
  humidity: integer("humidity").references(() => humidity.id),
  battery: integer("battery").references(() => batteries.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// MARK: Temp & Humidity
export const temperature = pgTable("temperature", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const feelsLike = pgTable("feels_like", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const appTemp = pgTable("app_temp", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const dewPoint = pgTable("dew_point", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const humidity = pgTable("humidity", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})

// MARK: Solar & UVI
export const solar = pgTable("solar", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const uvi = pgTable("uvi", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})

// MARK: Rainfall Meter
export const rainRate = pgTable("rain_rate", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const rainDaily = pgTable("rain_daily", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const rainEvent = pgTable("rain_event", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const rainHourly = pgTable("rain_hourly", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const rainWeekly = pgTable("rain_weekly", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const rainMonthly = pgTable("rain_monthly", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const rainYearly = pgTable("rain_yearly", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})

// MARK: Anemometer
export const windSpeed = pgTable("wind_speed", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const windGust = pgTable("wind_gust", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const windDirection = pgTable("wind_direction", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})

// MARK: Barometer
export const pressureAbsolute = pgTable("pressure_absolute", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const pressureRelative = pgTable("pressure_relative", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})

// MARK: Lightning Meter
export const lightningCount = pgTable("lightning_count", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const lightningDistance = pgTable("lightning_distance", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})

// MARK: Soil Meter
export const soilMoisture = pgTable("soil_moisture", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
export const soilAd = pgTable("soil_ad", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})

// MARK: Batteries
export const batteries = pgTable("batteries", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  value: decimal("value").notNull(),
})
