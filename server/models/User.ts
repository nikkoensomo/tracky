import mongoose, { Schema, Document, Model } from 'mongoose';

interface User extends Document {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlegth: 8,
        select: false
    }
}, { timestamps: true })

const User: Model<User> = mongoose.model<User>('User', userSchema);

export default User;