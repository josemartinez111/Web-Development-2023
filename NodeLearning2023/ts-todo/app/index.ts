// FILE: index.ts
// _______________________________________________

import { TodoCollection } from "./models/TodoCollection";
import { TodoItem } from "./models/todoItem";
// _______________________________________________

const todos: Array<TodoItem> = [
	TodoItem.create(1, "Buy Flowers"),
	TodoItem.create(2, "Get Shoes"),
	TodoItem.create(3, "Collect Tickets"),
	TodoItem.create(4, "Call Joe", "complete"),
];

const spacerTop = "\n_________________________________________";
const spacerBottom = "_________________________________________\n";

// may add more
let collection = TodoCollection.create("Adam", todos);

console.log(spacerTop);
console.log(`${ collection.username }'s Todo List`);
console.log(spacerBottom);


collection.removeCompleted()

collection.getTodoItems("complete")
	.forEach((item) => item.printDetails());

console.log(spacerBottom);
// _______________________________________________