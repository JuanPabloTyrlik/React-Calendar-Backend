import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const fieldValidator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send({
            ok: false,
            errors: errors.array(),
        });
    }
    next();
};
