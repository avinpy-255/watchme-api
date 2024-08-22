import { Router } from "express";
import { hello, registerHandler } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/register", registerHandler);
authRoutes.get("/hello", hello);

export default authRoutes;
