import User from '../models/User.js';
import type { Request, Response } from 'express';
import type { IUser } from '../models/User.js';
import type { HydratedDocument } from 'mongoose';

type AuthRequest = Request & {
    user?: HydratedDocument<IUser> | null;
}

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

export const getLoggedInUser = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(400).json({ message: 'Not authorized.' });
        }

        const user = await User.findOne({ 
            _id: req.user._id
        });

        res.status(200).json({
            message: 'Logged In User: ',
            user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error.'
        })
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

export const updatedUserById = async (req: Request, res: Response) => {
    try {
        const { username, firstName, lastName, password } = req.body;

        type UpdatedUserFields = {
            username?: string;
            firstName?: string;
            lastName?: string;
            password?: string;
        };

        const updatedFields: UpdatedUserFields = {};

        if (username) updatedFields.username = username;

        if (firstName) updatedFields.firstName = firstName;

        if (lastName) updatedFields.lastName = lastName;

        if (password) updatedFields.password = password;


        const user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: updatedFields },
            { new: true }
        )

        if (!user) {
            return res.status(400).json({ message: 'Failed to update user.' });
        }

        res.status(200).json({
            message: 'Successfully updated user.',
            user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error.'
        })
    }
}

export const createUserNickname = async (req: AuthRequest, res: Response) => {
    try {
        const { nickname } = req.body;

        if (!nickname) {
            return res.status(400).json({ message: 'Please input all required fiels.' });
        }

        if (!req.user) {
            return res.status(400).json({ message: 'Not authorized.' });
        }

        const user = await User.findByIdAndUpdate(
            req.user._id,
            { nickname },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(400).json({ message: 'Failed to update user.' });
        }

        res.status(200).json({
            message: 'Updated user:',
            user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error.'
        })
    }
}