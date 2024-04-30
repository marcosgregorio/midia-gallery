import { Router } from "express";
import list from "../controller/gallery/list";

const galleryRoutes = Router();

galleryRoutes.get("/", list)

export default galleryRoutes;
