import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import type { Request, Response, NextFunction } from 'express';
import type { HydratedDocument } from 'mongoose';
import type { IUser } from '../models/User.js';

type AuthRequest = Request & {
    user?: HydratedDocument<IUser> | null;
};

export const protect = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Not authorized, no token.' });
        return;
    }

    try {
        const token = authHeader.split(' ')[1];

        if (!token) {
            res.status(401).json({ message: 'Not authorized, no token.' });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        if (typeof decoded === 'string' || !('id' in decoded)) {
            res.status(401).json({ message: 'Invalid token.' });
            return;
        }

        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            res.status(401).json({ message: 'User not found.' });
            return;
        }

        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed.' });
    }
};