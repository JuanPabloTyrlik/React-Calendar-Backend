import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

export const validateJWT = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.header('Authorization');
    if (!token || !/^Bearer /.test(token)) {
        return res.status(401).send({
            ok: false,
            message: 'Missing authorization Bearer token',
        });
    }
    token = token.split(' ')[1];
    try {
        const payload = <IUser>(
            jwt.verify(token, <string>process.env.JWT_SECRET_SEED)
        );
        req.body = { ...req.body, uid: payload.uid, name: payload.name };
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            res.status(400).send({
                ok: false,
                message: 'Token expired',
            });
        } else {
            console.log(err);
            res.status(400).send({
                ok: false,
                message: 'Invalid Bearer token',
            });
        }
    }
};
