"use strict";
// FILE: index.ts
// _______________________________________________
Object.defineProperty(exports, "__esModule", { value: true });
const TodoCollection_1 = require("./models/TodoCollection");
const todoItem_1 = require("./models/todoItem");
// _______________________________________________
const todos = [
    todoItem_1.TodoItem.create(1, "Buy Flowers"),
    todoItem_1.TodoItem.create(2, "Get Shoes"),
    todoItem_1.TodoItem.create(3, "Collect Tickets"),
    todoItem_1.TodoItem.create(4, "Call Joe", "complete"),
];
const spacerTop = "\n_________________________________________";
const spacerBottom = "_________________________________________\n";
// may add more
let collection = TodoCollection_1.TodoCollection.create("Adam", todos);
console.log(`${collection.username}'s Todo List`);
console.log(spacerBottom);
console.log(spacerTop);
collection.getTodoItems()
    .forEach((item) => item.printDetails());
console.log(spacerBottom);
// _______________________________________________
