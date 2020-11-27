/* 
    Auth Routes
    {host}/api/auth
*/

import { Router } from 'express';
import { check } from 'express-validator';
import { fieldValidator } from '../middlewares/fieldValidator';
import { loginUser, registerUser, renewToken } from '../controllers/auth';
import { validateJWT } from '../middlewares/tokenValidator';
const router = Router();

router.post(
    '/login',
    [
        check('email', 'Email must be valid').isEmail(),
        check(
            'password',
            'Password must be at least 8 characters long, have at least one upper case letter, one lower case letter, contain a number and have a special character'
        ).matches(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;,.?/\\~_+\-=|]).{8,32}$/
        ),
        fieldValidator,
    ],
    loginUser
);
router.post(
    '/register',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email must be valid').isEmail(),
        check('password')
            .isLength({ min: 8, max: 32 })
            .withMessage('Password must be at least 8 characters long')
            .matches(/[0-9]/)
            .withMessage('Password must contain a number')
            .matches(/[a-z]/)
            .withMessage('Password must contain a lower case letter')
            .matches(/[A-Z]/)
            .withMessage('Password must contain an upper case letter')
            .matches(/[*.!@$%^&(){}[\]:;,.?/\\~_+\-=|]/)
            .withMessage('Password must contain a special character'),
        fieldValidator,
    ],
    registerUser
);
router.get('/token', [validateJWT], renewToken);

export default router;
