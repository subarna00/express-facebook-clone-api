import mongoose from 'mongoose';
import { config } from '@root/config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDB');
export default ()=>{

    const connect = ()=>{
        mongoose.connect(`${config.DATABASE_URL}`)
                .then(()=> log.info('db connected')
                )
                .catch((err)=>{
                   log.error('DB connection error',err);
                    return process.exit(1);

                });
    };
    connect();
    mongoose.connection.on('disconnectd',connect);
};
