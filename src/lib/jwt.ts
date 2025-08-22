import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const signJwt = (payload: object,) => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1h",
    })
}

export const verifyJwt = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch {
        return null;
    }
}