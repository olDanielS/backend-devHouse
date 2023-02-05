import express from 'express';
import path from 'path';

import mongoose from 'mongoose';
import routes from './routers';

class App{
    constructor(){
        this.server = express();
        
        mongoose.set("strictQuery", true);
        mongoose.connect("mongodb+srv://devHouseDN:MHsdq4PFW0IbIXXT@devhouse.xjn8rqu.mongodb.net/devHouse?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        this.middleware()
        this.routers()

    }

    middleware(){
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );
        
        this.server.use(express.json())
    }

    routers(){
        this.server.use(routes)
    }
}

export default new App().server;