import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        mongoose.set('strictQuery', true)
        //await mongoose.connect('mongodb+srv://senai:Tjh8zx7BHycABnQI@cluster0.xwjpeut.mongodb.net/?retryWrites=true&w=majority')
        mongoose.connect('mongodb://127.0.0.1:27017/tsnode')
            .catch(error => console.log(error));
    }

    private routes() : void {
        this.express.use(routes)
    }
}

export default new App().express