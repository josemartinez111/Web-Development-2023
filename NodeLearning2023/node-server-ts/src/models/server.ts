// FILE: models/server.ts
// _______________________________________________

import express, { Express, Request, Response } from 'express';
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
  
  /**
   * https://www.atatus.com/blog/http-status-code-to-use-for-crud-operation/
   * 1xxs (Informational responses)
   * The request is being considered by the server.
   * ----------------------------------------------------
   * 2xxs (Success!)
   * The request was successfully processed by the server
   * , and the browser received the required result.
   * ----------------------------------------------------
   * 3xxs (Redirection)
   * You were taken to another location. Even if the request was
   * received, there was some form of rerouting.
   * ----------------------------------------------------
   * 4xxs (Client errors)
   * Page not found. The website or page was inaccessible.
   * (Although the page is invalid, the request was made.
   * This is an error on the website's end of the discussion
   * and frequently occurs when a page doesn't exist on the site.)
   * ----------------------------------------------------
   * 5xxs (Server errors)
   * Failure. Although the client's request was valid,
   * the server was unable to accommodate it.
   * */
  routes() {
    this.app.post('/api', (req: Request, res: Response) => {
      const responseBody = {
        ok: '201 Created', // not required but I use it
        msg: 'Post + (CREATE) API',
      };
      
      res.status(201).json(responseBody);
    });
    
    this.app.get('/api', (req: Request, res: Response) => {
      const responseBody = {
        ok: '200 Success', // not required but I use it
        msg: 'Get + (READ) API',
      };
      
      res.status(200).json(responseBody);
    });
    
    this.app.put('/api', (req: Request, res: Response) => {
      const responseBody = {
        ok: '202 (Accepted)', // not required but I use it
        msg: 'Put + (UPDATE) API',
      };
      
      res.status(202).json(responseBody);
    });
    
    this.app.delete('/api', (req: Request, res: Response) => {
      const responseBody = {
        ok: '202 (Accepted)', // not required but I use it
        msg: 'Delete + (DELETE) API',
      };
      
      res.status(202).json(responseBody);
    });
  }
  
  
  listen() {
    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${ this.port }`);
    });
  }
}
// _______________________________________________