import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsers);

export default router;
