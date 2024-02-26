import express from "express";
import mongoose from "mongoose";
import routes from "./routes/picture.js";

const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/uploads");
}

app.get("/picture", routes);
app.post("/picture", routes);

app.use(express.json());
app.listen(3000, () => {
  console.log("API de uploads de imagem online!");
});
