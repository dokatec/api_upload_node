import express from "express";
import mongoose from "mongoose";
import uploads from "./upload.js";

const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/uploads");
}

app.get("/", (req, res) => {
  return res.sendFile("index.html", { root: "." });
});

app.post("/", uploads.single("avatar"), (req, res) => {
  try {
    res.json(`Arquivo enviado com sucesso: ${req.file.filename}`);
  } catch (error) {
    console.log(error);
  }
});
app.use(express.json());
app.listen(3000, () => {
  console.log("API de uploads de imagem online!");
});
