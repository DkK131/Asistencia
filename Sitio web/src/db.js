import {connect} from 'mongoose';

export const connectDB = async () => {
    try {
        await connect("mongodb://localhost/Pruebas.Chakis");
        console.log('connect to db');
    } catch (error) {
        console.error(error);
    }
};
