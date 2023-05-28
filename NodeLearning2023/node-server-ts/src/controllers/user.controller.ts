// FILE: controllers/user.controller.ts
// _______________________________________________

import { User } from '@/models/user';
import { Request, Response } from 'express';
// _______________________________________________

//! CREATE __________________________
const createUser = (req: Request, res: Response) => {
  const { name, age }: User = req.body;
  
  const responseBody: User = {
    name,
    age,
  };
  
  res.status(201).json(responseBody);
};

//! READ __________________________
const fetchUsers = (req: Request, res: Response) => {
  const { q, name, apiKey } = req.query;
  
  const responseBody = {
    ok: '200 Success', // not required but I use it
    msg: 'Get + (READ) API',
    q,
    name,
    apiKey,
  };
  
  res.status(200).json(responseBody);
};

//! UPDATE __________________________
const updateUserByID = (req: Request, res: Response) => {
  //! the `id` property is now available in your params
  //! because of this: `router.put('/:userID', updateUserByID);`
  const id = Number(req.params[ 'userID' ]); // Convert the parameter to a number
  
  if (isNaN(id)) {
    // If the id is not a valid number, respond with an error
    return res.status(400).send({ error: 'Invalid id' });
  }
  
  const responseBody = {
    ok: '202 (Accepted)', // not required but I use it
    msg: 'Put + (UPDATE) API',
    id,
  };
  
  res.status(202).json(responseBody);
};

//! DELETE __________________________
const deleteUser = (req: Request, res: Response) => {
  const responseBody = {
    ok: '202 (Accepted)', // not required but I use it
    msg: 'Delete + (DELETE) API',
  };
  
  res.status(202).json(responseBody);
};
// _______________________________________________
// Export the functions
export {
  fetchUsers,
  createUser,
  updateUserByID,
  deleteUser,
};
// _______________________________________________