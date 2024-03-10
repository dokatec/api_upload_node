import { Router } from "express";
import { create, findAll, remove } from "../controllers/pictureController.js";
import uploads from "../config/multer.js";

const routes = new Router();

routes.post("/picture", uploads.single("file"), create);
routes.get("/", findAll);
routes.delete("/:id", remove);
export default routes;
