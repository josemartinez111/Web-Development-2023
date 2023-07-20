// FILE: hello-world/hello-world.module.ts
// _______________________________________________

import { Module } from "@nestjs/common";
import { HelloWorldResolver } from "./hello-world.resolver";
// _______________________________________________

@Module({
  providers: [HelloWorldResolver]
})
// _______________________________________________

export class HelloWorldModule {
}
// _______________________________________________