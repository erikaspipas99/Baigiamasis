import express from "express";
import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://admin:admin@cluster0.tyt8w0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let db;
const app = express();
app.use(express.json());

try {
  const connection = await MongoClient.connect(connectionString);
  db = connection.db("sample_mflix");
  console.log("Connection");
  app.listen(3000);
} catch (error) {
  console.log("failed");
}
