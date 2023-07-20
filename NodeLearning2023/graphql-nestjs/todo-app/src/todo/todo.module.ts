// FILE: todo/todo.module.ts
// _______________________________________________

import { Module } from "@nestjs/common";
import { TodoResolver } from "src/todo/todo.resolver";
import { TodoService } from "./todo.service";
// _______________________________________________

@Module({
  providers: [TodoResolver, TodoService]
})
// _______________________________________________

export class TodoModule {
  // CODE-HERE
}
// _______________________________________________