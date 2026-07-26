import mongoose, { Schema, Document, Model, Types } from 'mongoose';

type AccountType = "cash" | "bank" | "ewallet" | "credit_card";

interface Account extends Document {
    userId: Types.ObjectId;
    name: string;
    type: AccountType;
    initialBalance: number;
    currentBalance: number;
    isArchived: boolean;
}

const accountSchema = new Schema<Account>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    initialBalance: {
        type: Number,
        required: true,
        min: 0,
    },
    currentBalance: {
        type: Number,
        required: true,
        min: 0,
    },
    isArchived: {
        type: Boolean,
        required: true,
        default: false
    },
}, { timestamps: true })

const Account: Model<Account> = mongoose.model<Account>('Account', accountSchema);

export default Account;