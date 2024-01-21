import express,{Express} from 'express';

import { FBServer } from './setupServer';
import setupDB from './setupDB';
import { config } from './config';
class MainApplication {
    public initilize(): void {
        this.loadConfig();
        setupDB();
        const app: Express = express();
        const server = new FBServer(app);
        server.start();
    }
    public loadConfig():void{
        config.validateConfig();
    }
}

const mainApplication: MainApplication = new MainApplication();
mainApplication.initilize();