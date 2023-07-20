// FILE: todo/todo.resolver.ts
// _______________________________________________

import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateTodoInput } from "src/todo/dto/inputs/create-todo.input";
import { Todo } from "src/todo/entity/todo.entity";
import { TodoService } from "src/todo/todo.service";
// _______________________________________________

@Resolver(() => Todo)
export class TodoResolver {
  
  // !constructor injecting the todo-service
  constructor(
    private readonly todoService: TodoService
  ) {
  }
  
  @Query(() => [Todo], { name: "todos" })
  findAll(): Array<Todo> {
    return this.todoService.findAll();
  }
  
  @Query(() => Todo, { name: "todo" })
  findOne(@Args("id", { type: () => Int }) value: number): Todo {
    return this.todoService.findOne(value);
  }
  
  @Mutation(() => Todo, { name: "createTodo" })
  createTodo(@Args("createTodoInput") createTodoInput: CreateTodoInput) {
    // console.log({ createTodoInput });
    return this.todoService.create(createTodoInput);
  }
  
  updateTodo() {
    
  }
  
  removeTodo() {
    
  }
}
// _______________________________________________















