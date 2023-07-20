"use strict";
// FILE: models/TodoCollection.ts
// _______________________________________________
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("../models/todoItem");
// _______________________________________________
class TodoCollection {
    username;
    todoItems;
    nextID = 1;
    todoItemsMap = new Map();
    constructor(username, todoItems = []) {
        this.username = username;
        this.todoItems = todoItems;
        todoItems.forEach((item) => {
            this.todoItemsMap.set(this.nextID, item);
        });
    }
    // creates a new object with `TodoCollection.create(<etc...>)`
    static create(username, todoItems) {
        return new TodoCollection(username, todoItems);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextID))
            this.nextID++;
        this.todoItemsMap.set(this.nextID, todoItem_1.TodoItem.create(this.nextID, task));
        return this.nextID;
    }
    getTodoById(id) {
        return this.todoItemsMap.get(id);
    }
    getTodoItems(includeStatus = "incomplete") {
        return [...this.todoItemsMap.values()]
            .filter((item) => {
            if (includeStatus === "complete" || item.status === "complete") {
                return item.status = "complete";
            }
            return item.status = "incomplete";
        });
    }
    markComplete(id, status) {
        const todoItem = this.getTodoById(id);
        if (todoItem)
            todoItem.status = status;
    }
}
exports.TodoCollection = TodoCollection;
// _______________________________________________
