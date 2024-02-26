import { Router } from "express";
import { create, findPicture } from "../controllers/pictureController.js";
import uploads from "../config/multer.js";

const routes = new Router();

routes.post("/picture", uploads.single("file"), create);
routes.get("/picture", findPicture);

export default routes;
