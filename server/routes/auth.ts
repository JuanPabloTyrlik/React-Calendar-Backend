/* 
    Auth Routes
    {host}/api/auth
*/

import { Router } from 'express';
import { loginUser, registerUser, renewToken } from '../controllers/auth';
const router = Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/token', renewToken);

export default router;
