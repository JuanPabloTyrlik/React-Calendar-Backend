require('dotenv').config();
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth';
import { dbConnection } from './database/config';
// Create Express Server
const app = express();

// Connect to DB
dbConnection();

// CORS
app.use(cors());

// Public Directory
app.use(express.static('public'));

// Parse body
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
// TODO: CRUD: Events

// Listen requests
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
