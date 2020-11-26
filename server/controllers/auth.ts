import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/User';

export const loginUser = (req: Request, res: Response) => {
    const { email, password } = req.body;

    res.send({
        ok: true,
        message: 'login',
        email,
        password,
    });
};

export const registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        return res.status(400).send({
            ok: false,
            message: `${email} already registered`,
        });
    }

    user = new User(req.body);

    try {
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.status(201).send({
            ok: true,
            message: `User created`,
            uid: user._id,
            name,
            email,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            ok: false,
            message: 'Please contact the administrator',
        });
    }
};

export const renewToken = (req: Request, res: Response) => {
    res.send({
        ok: true,
        message: 'Renew Token',
    });
};
