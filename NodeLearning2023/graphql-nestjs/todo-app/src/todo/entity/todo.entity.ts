// FILE: todo/entity/todo.entity.ts
// _______________________________________________

import { Field, Int, ObjectType } from "@nestjs/graphql";
// _______________________________________________

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  description: string;
  @Field(() => Boolean)
  done: boolean = false;
}
// _______________________________________________