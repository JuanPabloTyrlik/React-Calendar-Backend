import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { generateJWT } from '../helpers/jwt';

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({
                ok: false,
                message: 'Invalid email or password',
            });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send({
                ok: false,
                message: 'Invalid email or password',
            });
        }
        const token = await generateJWT(user.id, <string>user.name);
        res.status(200).send({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            ok: false,
            message: 'Please contact the administrator',
        });
    }
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
        const token = await generateJWT(user.id, <string>user.name);
        res.status(201).send({
            ok: true,
            message: `User created`,
            uid: user.id,
            name,
            token,
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
