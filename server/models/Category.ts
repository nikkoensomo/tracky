import mongoose, { Schema, Document, Model, Types } from 'mongoose';

type CategoryType = "income" | "expense";

interface Category extends Document {
    userId: Types.ObjectId;
    name: string,
    type: CategoryType,
    color?: string,
    icon?: string,
    isDefault?: boolean, 
}

const categorySchema = new Schema<Category>({
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
        enum: ['income', 'expense'],
        required: true,
    },
    color: {
        type: String,
        required: false,
        default: '#64748B',
    },
    icon: {
        type: String,
        required: false,
    },
    isDefault: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Category: Model<Category> = mongoose.model<Category>('Category', categorySchema);

export default Category;