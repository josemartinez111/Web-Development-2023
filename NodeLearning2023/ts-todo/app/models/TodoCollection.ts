// FILE: models/TodoCollection.ts
// _______________________________________________

import { StatusType, TodoItem } from "../models/todoItem";
// _______________________________________________

export class TodoCollection {
	private nextID: number = 1;
	public todoItemsMap: Map<number, TodoItem> = new Map();
	
	constructor(
		public username: string,
		public todoItems: Array<TodoItem> = [],
	) {
		todoItems.forEach((item: TodoItem) => {
			this.todoItemsMap.set(item.id, item);
		});
	}
	
	// creates a new object with `TodoCollection.create(<etc...>)`
	public static create(username: string, todoItems: Array<TodoItem>): TodoCollection {
		return new TodoCollection(username, todoItems);
	}
	
	addTodo(task: string): number {
		while (this.getTodoById(this.nextID)) this.nextID++;
		
		this.todoItemsMap.set(this.nextID, TodoItem.create(this.nextID, task));
		return this.nextID;
	}
	
	getTodoById(id: number): TodoItem {
		return this.todoItemsMap.get(id);
	}
	
	getTodoItems(includeStatus: StatusType = "incomplete"): Array<TodoItem> {
		return [...this.todoItemsMap.values()]
			.filter((item: TodoItem) => {
				return includeStatus === "complete"
					? item.status === "complete"
					: item.status !== "complete";
			});
	}
	
	markCompleted(id: number, status: StatusType): void {
		const todoItem = this.getTodoById(id);
		if (todoItem) todoItem.status = status;
	}
	
	removeCompleted(): void {
		this.todoItemsMap.forEach((item: TodoItem) => {
			if (item.status === "complete") {
				this.todoItemsMap.delete(item.id);
				console.log(`Item deleted with id of ${ item.id }`);
				item.printDetails();
			}
		});
	}
}
// _______________________________________________

















