import mongoose, { Schema, Document, Model, Types } from 'mongoose';

interface Budget extends Document {
    userId: Types.ObjectId;
    categoryId: Types.ObjectId;
    month: Number;
    year: Number;
    limit: Number;
    createdAt?: Date;
    updatedAt?: Date;
}

const budgetSchema = new Schema<Budget>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    month: {
        type: Number,
        required: true,
        min: 1,
        max: 12,
    },
    year: {
        type: Number,
        required: true,
        min: 2000,
    },
    limit: {
        type: Number,
        required: true,
        min: 0,
    },
}, { timestamps: true });

const Budget: Model<Budget> = mongoose.model<Budget>('Budget', budgetSchema);

export default Budget;