import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from '../utils/loggers/Log4jsLogger.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, (err) => {
    err
        ? logger.error("error, can't connect to mongoDB")
        : logger.info("connected to mongoDB")
})

export default mongoose;
