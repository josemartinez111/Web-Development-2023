// FILE: todo/todo.service.ts
// _______________________________________________

import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTodoInput } from "src/todo/dto/inputs/create-todo.input";
import { Todo } from "src/todo/entity/todo.entity";
// _______________________________________________

@Injectable()
export class TodoService {
  private todos: Array<Todo> = [
    { id: 1, description: "Going out with the kids", done: false },
    { id: 2, description: "Create Jose's flyer", done: true },
    { id: 3, description: "Be happier today", done: false }
  ];
  
  findAll(): Array<Todo> {
    return this.todos;
  }
  
  findOne(id: number): Todo {
    // ?checking if the `todo` we want, matches the id being inputted
    const todo = this.todos.find((todo: Todo) => todo.id === id);
    
    if (!todo) {
      throw new NotFoundException(`Todo with id ${ id } not found`);
    }
    
    return todo;
  }
  
  create({ description }: CreateTodoInput): Todo {
    const todo = new Todo();
    todo.description = description;
    
    todo.id = Math.max(
      ...this.todos
        .map((todo: Todo) => todo.id), 0
    ) + 1;
    
    this.todos.push(todo);
    return todo;
  }
}
// _______________________________________________













