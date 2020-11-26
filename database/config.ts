import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        await mongoose.connect(<string>process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Could not connect to Database');
    }
};
