import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    username?: string;
    firstName?: string;
    lastName?: string;
    nickname?: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: false,
        trim: true
    },
    firstName: {
        type: String,
        required: false,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    nickname: {
        type: String,
        required: false,
        trim: true,
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

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;