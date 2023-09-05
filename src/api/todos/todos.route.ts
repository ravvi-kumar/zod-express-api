import { Router } from "express";
import { findAll, createOne } from "./todos.controller";

const router = Router();

router.get("/", findAll);
router.post("/", createOne);
export default router;
