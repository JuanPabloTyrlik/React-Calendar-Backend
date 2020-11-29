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
export const getEvents = async (req: Request, res: Response) => {
    const events = await Event.find().populate('user', 'name');
    res.send({
        ok: true,
        events,
    });
};
// Update
export const updateEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).send({
                ok: false,
                message: 'Event not found',
            });
        }
        if (event.user?.toString() !== req.body.uid) {
            return res.status(403).send({
                ok: false,
                message: 'Access denied',
            });
        }
        const { title, notes, start, end, uid } = req.body;
        const newEvent = {
            title,
            notes,
            start,
            end,
            user: uid,
        };
        const updatedEvent = await Event.findByIdAndUpdate(id, newEvent, {
            new: true,
        });
        res.send({
            ok: true,
            event: updatedEvent,
        });
    } catch (err) {
        if (err.name === 'CastError') {
            return res.status(404).send({
                ok: false,
                message: 'Event not found',
            });
        }
        console.log(err);
        res.status(500).send({
            ok: false,
            message: 'Please contact the administrator',
        });
    }
};
// Delete
export const deleteEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).send({
                ok: false,
                message: 'Event not found',
            });
        }
        if (event.user?.toString() !== req.body.uid) {
            return res.status(403).send({
                ok: false,
                message: 'Access denied',
            });
        }
        await Event.findByIdAndDelete(id);
        res.status(200).send({
            ok: true,
            message: 'Event deleted',
        });
    } catch (err) {
        if (err.name === 'CastError') {
            return res.status(404).send({
                ok: false,
                message: 'Event not found',
            });
        }
        console.log(err);
        res.status(500).send({
            ok: false,
            message: 'Please contact the administrator',
        });
    }
};
