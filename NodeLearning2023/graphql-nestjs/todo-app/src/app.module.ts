// FILE: app.module.ts
// _______________________________________________

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import {
  ApolloServerPluginLandingPageLocalDefault
} from "@apollo/server/plugin/landingPage/default";
import { join } from "path";
import { TodoModule } from "src/todo/todo.module";
import { HelloWorldModule } from "./hello-world/hello-world.module";
// _______________________________________________

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // debug: false,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ]
    }),
    HelloWorldModule,
    TodoModule
  ],
  controllers: [],
  providers: []
})
// _______________________________________________

export class AppModule {
}
// _______________________________________________
