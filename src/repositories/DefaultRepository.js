import DatabaseManager from "../application/DatabaseManager";
import { ObjectId } from 'mongodb';

export default class DefaultRepository {
    constructor (modelName) {
        this.modelName = modelName;
    }

    async add(document) {
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.insert(document, (err, result) => {
                if(!err){
                    resolve(result.ops);
                } else {
                    reject(err);
                }
            });
        });
    }

    async findAll() {
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.find({}).toArray((err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    }

    async find(_id) {
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.find({ _id: ObjectId(_id) }).toArray((err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    }

    async update(document) {
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.updateOne({ _id: ObjectId(_id) }, { $set: document }, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    }

    async remove(_id){
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.deleteOne({ _id: ObjectId(_id) }, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    }
}