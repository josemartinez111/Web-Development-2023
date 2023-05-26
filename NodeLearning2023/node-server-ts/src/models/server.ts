// FILE: models/server.ts
// _______________________________________________

import express, { Express, Request, Response } from 'express';
// _______________________________________________

// _______________________________________________

export class Server {
  private app: Express;
  private readonly port: string | undefined;
  
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    
    // middleware that runs everytime we start our server
    this.middleware();
    // call our routes when the server starts
    this.routes();
  }
  
  middleware() {
    // access to our public directory
    this.app.use(express.static('public'));
  }
  
  routes() {
    this.app.get('/api', (req: Request, res: Response) => {
      const requestStyles = 'font-weight: bold; font-size: 3.3rem;';
      res.send(`<h1 style=${ requestStyles }>Express + TypeScript Server</h1>`);
    });
  }
  
  listen() {
    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${ this.port }`);
    });
  }
}
// _______________________________________________