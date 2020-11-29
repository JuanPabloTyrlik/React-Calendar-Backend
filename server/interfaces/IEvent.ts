import { Document } from 'mongoose';
import { IUser } from './IUser';

export interface IEvent extends Document {
    uid?: string;
    title: string;
    notes?: string;
    start: Date;
    end: Date;
    user: IUser['uid'];
}
