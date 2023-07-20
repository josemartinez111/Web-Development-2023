// FILE: hello-world.resolver.ts
// _______________________________________________

import { Args, Float, Int, Query, Resolver } from "@nestjs/graphql";
// _______________________________________________

/**
 * A resolver is similar to a provider/controller in nestjs/graphql */
@Resolver()
export class HelloWorldResolver {
  
  @Query(() => String, { name: "healthCheck" })
  helloWorld(): string {
    return "hola mundo";
  }
  
  @Query(() => Float, { name: "randomNumber" })
  fetchRandomNumber(): number {
    return Number((Math.random() * 100).toFixed(2));
  }
  
  @Query(() => Int, { name: "randomNumberFromZero" })
  fetchRandomNumberFromZero(
    @Args("to", { nullable: true, type: () => Int }) value: number = 6
  ): number {
    let result = Math.floor(Math.random() * value);
    if (result <= 0) result = 1;
    return result;
  }
}
// _______________________________________________






















