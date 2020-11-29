import { Response, Request } from 'express';
import Event from '../models/Event';

// Create
export const createEvent = async (req: Request, res: Response) => {
    const event = new Event(req.body);
    event.user = req.body.uid;
    try {
        await event.save();
        res.status(201).send({
            ok: true,
            event,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            ok: false,
            message: 'Please contact the administrator',
        });
    }
};
// Read
export const getEvents = (req: Request, res: Response) => {
    res.send({
        ok: true,
        message: 'getEvents',
    });
};
// Update
export const updateEvent = (req: Request, res: Response) => {
    res.send({
        ok: true,
        message: 'updateEvent',
    });
};
// Delete
export const deleteEvent = (req: Request, res: Response) => {
    res.send({
        ok: true,
        message: 'deleteEvent',
    });
};
