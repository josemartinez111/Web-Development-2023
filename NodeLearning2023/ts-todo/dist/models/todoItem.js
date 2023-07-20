"use strict";
// FILE: models/todoItem.ts
// _______________________________________________
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
// _______________________________________________
class TodoItem {
    id;
    task;
    status;
    constructor(id, task, status = "incomplete") {
        this.id = id;
        this.task = task;
        this.status = status;
    }
    // creates a new object with `TodoItem.create(<etc...>)`
    static create(id, task, status = "incomplete") {
        return new TodoItem(id, task, status);
    }
    printDetails() {
        const details = {
            id: this.id,
            task: this.task,
            status: this.status === "complete" ? "complete" : "incomplete",
        };
        const result = JSON.stringify(details, null, 2);
        console.log(`TodoItem: ${result}`);
        return result;
    }
}
exports.TodoItem = TodoItem;
// _______________________________________________
