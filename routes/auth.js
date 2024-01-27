import express from "express";
import { createAuthenticate } from "../api/controllers/authentication.js";




const router = express.Router();
router.get("/",createAuthenticate);

export default router;