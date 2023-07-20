// FILE: models/todoItem.ts
// _______________________________________________

export type StatusType = "complete" | "incomplete"
// _______________________________________________

export class TodoItem {
	
	constructor(
		public id: number,
		public task: string,
		public status: StatusType = "incomplete",
	) {
	}
	
	// creates a new object with `TodoItem.create(<etc...>)`
	public static create(
		id: number, task: string,
		status: StatusType = "incomplete"
	): TodoItem {
		return new TodoItem(id, task, status);
	}
	
	public printDetails(): string {
		const details = {
			id: this.id,
			task: this.task,
			status: this.status === "complete" ? "complete" : "incomplete",
		};
		
		const result = JSON.stringify(details, null, 2);
		console.log(`TodoItem: ${ result }`);
		
		return result;
	}
}
// _______________________________________________