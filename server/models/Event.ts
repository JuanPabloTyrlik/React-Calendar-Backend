import { Schema, model, MongooseDocument } from 'mongoose';
import { IEvent } from '../interfaces/IEvent';

const EventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
        },
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        toJSON: {
            transform: (doc: MongooseDocument) => {
                const { _id, __v, ...obj } = doc.toObject();
                obj.id = _id;
                return obj;
            },
        },
    }
);

export default model<IEvent>('Event', EventSchema);
