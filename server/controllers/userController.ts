import User from '../models/User.js';
import type { Request, Response } from 'express';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({});

        if (users.length === 0) {
            return res.status(400).json({ message: 'No existing user.' });
        }

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error.'
        });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById({ _id: req.params.id })

        if (!user) {
            return res.status(400).json({ message: 'User does not exist.' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error.'
        });
    }
}

