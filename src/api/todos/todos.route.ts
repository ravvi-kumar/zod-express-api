import { Router } from "express";
import { findAll } from "./todos.controller";

const router = Router();

router.get("/", findAll);
export default router;
