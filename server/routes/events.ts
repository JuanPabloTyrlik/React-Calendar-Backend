/* 
    Auth Routes
    {host}/api/events
*/

import { Router } from 'express';
import { check } from 'express-validator';
import { validateJWT } from '../middlewares/tokenValidator';
import { fieldValidator } from '../middlewares/fieldValidator';
import { isValidDate } from '../helpers/isValidDate';
import {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
} from '../controllers/events';

const router = Router();
router.use(validateJWT);

router.get('/', getEvents);
router.post(
    '/',
    [
        check('title', 'Title is required').not().isEmpty(),
        check('start', 'Start date is required').custom(isValidDate),
        check('end', 'End date is required').custom(isValidDate),
        fieldValidator,
    ],
    createEvent
);
router.put(
    '/:id',
    [
        check('title', 'Title is required').not().isEmpty(),
        check('start', 'Start date is required').custom(isValidDate),
        check('end', 'End date is required').custom(isValidDate),
        fieldValidator,
    ],
    updateEvent
);
router.delete('/:id', deleteEvent);

export default router;
