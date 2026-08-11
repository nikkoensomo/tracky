import mongoose, { Schema, Document, Model, Types } from 'mongoose';

type TransactionType = 'income' | 'expense' | 'transfer';
type PaymentMethodType = 'cash' | 'ewallet' | 'credit_card';

interface Transaction extends Document {
    userId: Types.ObjectId;
    accountId: Types.ObjectId;
    categoryId: Types.ObjectId;
    type: TransactionType;
    amount: number;
    title: string;
    note?: string;
    transactionDate: Date;
    paymentMethod: PaymentMethodType;
}

const transactionSchema = new Schema<Transaction>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    accountId: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    type: {
        type: String,
        trim: true,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    title: {
        type: String,
        trim: true,
    },
    note: {
        type: String,
        trim: true,
        required: false,
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'ewallet', 'credit_card'],
        required: true,
    },
    transactionDate: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

const Transaction: Model<Transaction> = mongoose.model<Transaction>('Transaction', transactionSchema);

export default Transaction;