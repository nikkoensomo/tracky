import Account from '../models/Account.js';
import User from '../models/User.js';
import type { IUser } from '../models/User.js';
import type { HydratedDocument } from 'mongoose';
import type { Request, Response } from 'express';

type AuthRequest = Request & {
    user?: HydratedDocument<IUser> | null;
};

export const createAccount = async (req: AuthRequest, res: Response) => {
    try {
        const { name, type, initialBalance } = req.body;

        if (!name || !type || initialBalance === undefined) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        if (!['cash', 'bank', 'ewallet', 'credit_card'].includes(type)) {
            return res.status(400).json({ message: 'Invalid account type.' });
        }

        if (Number(initialBalance) < 0) {
            return res.status(400).json({ message: 'Initial balance cannot be negative.' });
        }

        if (!req.user) {
            return res.status(400).json({ message: 'Not authorized.' });
        }

        const account = await Account.create({
            userId: req.user._id,
            name,
            type,
            initialBalance,
            currentBalance: initialBalance,
        });

        res.status(200).json({
            message: 'Account created successfully.',
            account
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error.'
        });
    }
}

export const getAccountDetails = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(400).json({ message: 'Not authorized. code: 001' });
        }

        if (req.params.id !== req.user.id) {
            return res.status(400).json({ message: 'Not authorized. code: 002' });
        }

        const accountDetails = await Account.find({
            userId: req.user._id,
        });

        res.status(200).json({
            message: 'Account details:',
            accountDetails,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}