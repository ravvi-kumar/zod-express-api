import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { Todo, TodoWithId, Todos } from "./todos.model";

export async function findAll(
  req: Request,
  res: Response<TodoWithId[]>,
  next: NextFunction
) {
  try {
    const result = await Todos.find();
    const todos = await result.toArray();
    res.json(todos);
  } catch (error) {
    next(error);
  }
}
export async function createOne(
  req: Request<{}, TodoWithId, Todo>,
  res: Response<TodoWithId>,
  next: NextFunction
) {
  try {
    const validatedResult = await Todo.parseAsync(req.body);
    const todo = await Todos.insertOne(validatedResult);
    if (!todo.acknowledged) {
      throw new Error("Insertion failed");
    }
    res.status(201);
    res.json({
      _id: todo.insertedId,
      ...validatedResult,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(422);
    }
    next(error);
  }
}
