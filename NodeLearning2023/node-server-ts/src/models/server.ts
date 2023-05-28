// FILE: models/server.ts
// _______________________________________________

import express, { Express } from 'express';
import cors from 'cors';
import userRoutes from 'src/routes/user.route'
// _______________________________________________

export class Server {
  private app: Express;
  private readonly port: string | undefined;
  private readonly userPath: string;
  
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/users';
    // middleware that runs everytime we start our server
    this.middleware();
    // call our routes when the server starts
    this.routes();
  }
  
  middleware() {
    //! CORS
    this.app.use(cors());
    //! Parsing/Serializing body to json for all our request
    this.app.use(express.json())
    //! access to our public directory
    this.app.use(express.static('public'));
  }
  
  routes() {
    this.app.use(this.userPath, userRoutes);
  }
  
  
  listen() {
    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${ this.port }`);
    });
  }
}
// _______________________________________________