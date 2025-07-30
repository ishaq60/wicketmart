import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri || !dbName) {
  throw new Error("Please define MONGODB_URI and MONGODB_DB in your .env.local file");
}

let cachedClient = null;
let cachedDb = null;

const connectDB = async () => {
  if (cachedDb) return cachedDb;

  try {
    const client = await MongoClient.connect(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    const db = client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    console.log("✅ Connected to MongoDB:", dbName);
    return db;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
