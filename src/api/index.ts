import express, { Request, Response } from "express";

import todos from "./todos/todos.route";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "/api",
  });
});

router.use("/todos", todos);

export default router;
