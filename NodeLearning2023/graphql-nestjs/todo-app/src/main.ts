// FILE: main.ts
// _______________________________________________

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// _______________________________________________

async function bootstrap(): Promise<number> {
  // !!!CHANGE-PORT HERE!!!
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  return port;
}

// _______________________________________________

async function run() {
  try {
    const port = await bootstrap();
    
    const portStr = `
    serving at: http://localhost:${ port }
    `;
    const bootstrapStr = `
    -------------------------------------
   |  ${ portStr.trim() }  |
   |                                     |
    -------------------------------------
    `;
    console.log(bootstrapStr);
  } catch (error) {
    console.error("Error bootstrapping the application:", error);
  }
}

// _______________________________________________

run().then();
// _______________________________________________
