// FILE: src/index.ts
// _______________________________________________

import { Server } from '@/models/server';
import dotenv from 'dotenv';
// _______________________________________________
dotenv.config();
const server = new Server();
// run the server
server.listen();
// _______________________________________________