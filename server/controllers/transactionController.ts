import Transaction from '../models/Transaction.js';
import Account from '../models/Account.js';
import Category from '../models/Category.js';
import type { IUser } from '../models/User.js';
import type { Request, Response } from 'express';
import type { HydratedDocument } from 'mongoose';

type AuthRequest = Request & {
    user?: HydratedDocument<IUser> | null;
};

export const createExpense = async (req: AuthRequest, res: Response) => {
    try {
        const { accountId, categoryId, amount, title, note, transactionDate, paymentMethod } = req.body;

        if (accountId === undefined || categoryId === undefined) {
            return res.status(400).json({ message: 'Invalid account.' });
        }

        if (!amount || !title || !title || !transactionDate || !paymentMethod) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        if (!req.user) {
            return res.status(400).json({ message: 'Not authorized.' });
        }

        const account = await Account.findOne({
            _id: accountId,
            userId: req.user._id,
        });

        const category = await Category.findOne({
            _id: categoryId,
            userId: req.user._id,
            type: 'expense',
        });

        if (!account || !category) {
            return res.status(200).json({ message: 'Account or Category is invalid'});
        }

        const transaction = await Transaction.create({
            userId: req.user._id,
            accountId,
            categoryId,
            type: 'expense',
            amount,
            title,
            note,
            transactionDate,
            paymentMethod,
        });

        account.currentBalance -= amount;
        await account.save();

        res.status(200).json({ 
            message: 'Transaction successful.',
            transaction
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error.'
        });
    }
}

export const createIncome = async (req: AuthRequest, res: Response) => {
    try {
        const { accountId, categoryId, amount, title, note, transactionDate, paymentMethod } = req.body;

        if (accountId === undefined || categoryId == undefined) {
            return res.status(400).json({ message: 'Invalid account' });
        }

        if (!amount || !title || !transactionDate || !paymentMethod) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        if (!req.user) {
            return res.status(400).json({ message: 'Not authorized.' });
        }

        const account = await Account.findOne({
            _id: accountId,
            userId: req.user._id,
        });

        const category = await Category.findOne({
            _id: categoryId,
            userId: req.user._id,
            type: 'income',
        });

        if (!account || !category) {
            return res.status(400).json({ message: 'Account or Category is invalid.'})
        }

        const transaction = await Transaction.create({
            userId: req.user._id,
            accountId,
            categoryId,
            type: 'income',
            amount,
            title,
            note,
            transactionDate,
            paymentMethod,
        });

        account.currentBalance += amount;
        await account.save();

        res.status(200).json({
            message: 'Transaction successful.',
            transaction
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Server error.',
            error: error instanceof Error ? error.message : 'Unknown error.'
        });
    }
}

export const getUserTransactions = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(400).json({ message: 'Not Authorized.' });
        }

        const transactions = await Transaction.find({
            userId: req.user._id,
        }).populate([
            {path: 'accountId', select: ['name', 'type']},
            {path: 'categoryId', select: ['name', 'type']}
        ]);

        res.status(200).json({
            message: 'User transactions:',
            transactions,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error instanceof Error ? error.message : 'Unknown error.'
        });
    }
}