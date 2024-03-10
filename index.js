import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/picture.js";

const app = express();
app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/uploads");
}

app.get("/", routes);
app.post("/picture", routes);

app.use(express.json());
app.listen(3000, () => {
  console.log("API de uploads de imagem online!");
});
