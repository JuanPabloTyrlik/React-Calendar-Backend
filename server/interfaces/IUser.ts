import { Document } from 'mongoose';

export interface IUser extends Document {
    uid?: string;
    name?: string;
    email: string;
    password: string;
}
