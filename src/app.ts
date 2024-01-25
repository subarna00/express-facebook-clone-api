import express,{Express} from 'express';

import { FBServer } from '@root/setupServer';
import setupDB from '@root/setupDB';
import { config } from '@root/config';
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
        config.coludnaryConfig();
    }
}

const mainApplication: MainApplication = new MainApplication();
mainApplication.initilize();
