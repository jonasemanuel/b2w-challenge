import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'

export default class DatabaseManager {
    constructor() {
        this.connection = null;
    }

    static getConnection(){
        dotenv.config();
        return new Promise((resolve, reject) => {
            if(this.connection){
                resolve(this.connection);
            } else {
                console.log(process.env.CONNECTION_STRING)
                MongoClient.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true }, (err, client) => {  
                    this.connection = client.db(process.env.DATABASE_NAME);
                    if(!err){
                        resolve(this.connection);
                    } else {
                        reject(err);
                    }
                });
            }
        })
    }
}