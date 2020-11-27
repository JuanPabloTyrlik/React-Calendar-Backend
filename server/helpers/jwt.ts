import jwt from 'jsonwebtoken';

export const generateJWT = (uid: string, name: string) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };
        jwt.sign(
            payload,
            <string>process.env.JWT_SECRET_SEED,
            {
                expiresIn: '1h',
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject('Could not generate token');
                } else {
                    resolve(token);
                }
            }
        );
    });
};
