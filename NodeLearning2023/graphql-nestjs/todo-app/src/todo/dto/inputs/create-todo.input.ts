// FILE: todo/dto/inputs/create-todo.input.ts
// _______________________________________________

import { Field, InputType } from "@nestjs/graphql";
// _______________________________________________


@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: "What needs to be done" })
  description: string;
}
// _______________________________________________