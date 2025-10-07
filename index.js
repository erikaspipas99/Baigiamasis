import express from "express";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import { textValidate } from "./validate.js";
import cors from "cors";

const connectionString =
  "mongodb+srv://admin:admin@cluster0.tyt8w0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let db;
const app = express();
app.use(cors());
app.use(express.json());

try {
  const connection = await MongoClient.connect(connectionString);
  db = connection.db("sample_mflix");
  console.log("Connection");
  app.listen(3000);
} catch (error) {
  console.log("failed");
}

// ieskojau 40min, kodel neikelia duomenu i mongogb.. pasirodo per mazai skaiciu veidziau prie iD :)))))))
app.post("/machine", async (req, res) => {
  try {
    const { error, value } = textValidate.validate(req.body);
    if (error) {
      return res.send("Failed get machine info");
    }

    const collection = db.collection("machine");
    const result = await collection.insertOne(value);
    return res.json(result);
  } catch (err) {
    return res.send("Error");
  }
});

app.get("/machine", async (req, res) => {
  try {
    const collection = db.collection("machine");
    const machine = await collection.find().toArray();
    res.json(machine);
  } catch (err) {
    res.send("Miss machine");
  }
});

app.put("/machine", async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    if (!_id) {
      return res.send("Bad machine ID");
    }
    const collection = db.collection("machine");
    const newmachine = await collection.updateOne(
      {
        _id: new ObjectId(_id),
      },
      { $set: updateData }
    );
    res.json(newmachine);
  } catch (err) {
    res.send("error");
  }
});

app.delete("/machine", async (req, res) => {
  try {
    const { machine } = req.body;
    if (!machine) {
      return res.send("Not Delete Machines");
    }
    const collection = db.collection("machine");
    const result = await collection.deleteOne({ _id: new ObjectId(_id) });
    res.json(result);
  } catch (err) {
    res.send("Error delete");
  }
});
