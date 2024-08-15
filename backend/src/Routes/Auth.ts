import express, { Router } from "express";
import Auth from "../Controllers/Auth";
const router = express();

router.post("/register", Auth.register);
router.post("/login", Auth.login);

export default router;
