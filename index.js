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
    const id = req.params;
    const machineUpdate = db.collection("machine");
    const newAddMachine = machineUpdate.machine;
    if (!newAddMachine) {
      res.send("Error, not update new Machine");
      return;
    }
    const collection = db.collection("machine");
    const newmachine = await collection.updateOne({
      _id: new ObjectId(id),
    });
    res.json(newmachine);
  } catch (err) {
    res.send("error");
  }
});

app.delete("/machine", async (req, res) => {
  try {
    const collection = db.collection("machine");
    const deleteMachine = await collection.updateOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (deleteMachine === 0) {
      return res.send("Delete failed");
    }
    res.json(deleteMachine);
  } catch (err) {
    res.send("Error");
  }
});
