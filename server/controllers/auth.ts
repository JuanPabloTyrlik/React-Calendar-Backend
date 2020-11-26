import { Request, Response } from 'express';

export const loginUser = (req: Request, res: Response) => {
    res.send({
        ok: true,
        message: 'login',
    });
};

export const registerUser = (req: Request, res: Response) => {
    res.send({
        ok: true,
        message: 'register',
    });
};

export const renewToken = (req: Request, res: Response) => {
    res.send({
        ok: true,
        message: 'Renew Token',
    });
};
