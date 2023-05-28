// FILE: routes/user.route.ts
// _______________________________________________

import {
  createUser,
  deleteUser,
  fetchUsers,
  updateUserByID,
} from '@/controllers/user.controller';
import { Router } from 'express';
// _______________________________________________


const router = Router();
// _______________________________________________

router.post('/', createUser);
router.get('/', fetchUsers);
//? dynamically update by ID
router.put('/:userID', updateUserByID);
router.delete('/', deleteUser);
// _______________________________________________

export default router;
// _______________________________________________