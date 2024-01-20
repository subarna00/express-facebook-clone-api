import mongoose from "mongoose";
import { config } from "./config";
export default ()=>{
    const connect = ()=>{
        mongoose.connect(`${config.DATABASE_URL}`)
                .then(()=> console.log("db connected")
                )
                .catch((err)=>{
                    console.log("DB connection error",err);
                    return process.exit(1);
                    
                })
    }
    connect();
    mongoose.connection.on("disconnectd",connect);
}