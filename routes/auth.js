/* 
    Auth Routes
    {host}/api/auth
*/

import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send({
        ok: true,
    });
});

export default router;
