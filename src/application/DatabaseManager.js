import { MongoClient } from 'mongodb';
import Application from './Application';

export default class DatabaseManager {
    constructor() {
        this.connection = null;
    }

    static getConnection(){
        return new Promise((resolve, reject) => {
            if(this.connection){
                resolve(this.connection);
            } else {
                MongoClient.connect(Application.getConfig().connectionString, { useNewUrlParser: true }, (err, client) => {  
                    this.connection = client.db(Application.getConfig().databaseName);
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