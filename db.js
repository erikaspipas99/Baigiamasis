import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://admin:admin@cluster0.tyt8w0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let db;

export async function connectDB() {
  if (!db) {
    const client = await MongoClient.connect(connectionString);
    db = client.db("sample_mflix");
    console.log("Connection");
  }
  return db;
}
