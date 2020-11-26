import { Request, Response } from 'express';

export const loginUser = (req: Request, res: Response) => {
    const { email, password } = req.body;

    res.send({
        ok: true,
        message: 'login',
        email,
        password,
    });
};

export const registerUser = (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    res.status(201).send({
        ok: true,
        message: 'register',
        name,
        email,
        password,
    });
};

export const renewToken = (req: Request, res: Response) => {
    res.send({
        ok: true,
        message: 'Renew Token',
    });
};
