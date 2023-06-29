import "./src/boilerplate.polyfill";

import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

import { AdminSubscriber } from "./src/entity-subscribers/admin-subscriber";
import { SnakeNamingStrategy } from "./src/snake-naming.strategy";

dotenv.config();

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  namingStrategy: new SnakeNamingStrategy(),
  subscribers: [AdminSubscriber],
  entities: [
    "src/modules/**/entities/*.entity{.ts,.js}",
    "src/modules/**/entities/*.view-entity{.ts,.js}",
  ],
  migrations: ["src/database/migrations/*{.ts,.js}"],
  extra: {
    timezone: process.env.DB_TIMEZONE,
  },
});

// Add the MongoDB connection
const mongoDB = await connectToMongoDB();
// You can now use the 'mongoDB' object to interact with MongoDB

// Example: Insert a document
const collection = mongoDB.collection("myCollection");
await collection.insertOne({ key: "value" });
