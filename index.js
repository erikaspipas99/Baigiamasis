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
app.post("/machine", async (req, res) => {
  try {
    const { value } = await textValidate.validate(req.body);
    if (!value) {
      return res.send("Failed get machine info");
    }

    const collection = await db.collection("CreatemMachine");
    const result = await collection.insertOne(value);
    return res.json(result);
  } catch {
    return res.send("Error");
  }
});
