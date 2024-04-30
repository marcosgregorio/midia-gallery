import { Router } from "express";
import galleryRoutes from "./gallery.routes";

const router = Router();

router.use('/gallery', galleryRoutes);

export default router;