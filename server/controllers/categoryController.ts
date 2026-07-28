import type { Request, Response } from 'express';
import type { IUser } from '../models/User.js';
import type { HydratedDocument } from 'mongoose';
import Category from '../models/Category.js';

type AuthRequest = Request & {
    user?: HydratedDocument<IUser> | null;
};

export const createCategory = async (req: AuthRequest, res: Response) => {
    try {
        const { name, type } = req.body; 

        if (!name || !type) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        if (!req.user) {
            return res.status(400).json({ message: 'Not authorized.' });
        }

        const category = await Category.create({
            userId: req.user._id,
            name,
            type,
        });

        res.status(200).json({ 
            message: 'Category successfully created.',
            category
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}