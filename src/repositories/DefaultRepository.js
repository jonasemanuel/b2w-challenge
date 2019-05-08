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

    async findAll(params) {
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.find(params).toArray((err, result) => {
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
        let objectToUpdate = Object.assign({}, document);
        let database = await DatabaseManager.getConnection();
        let id = objectToUpdate._id;
        delete objectToUpdate._id;
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.updateOne({ _id: ObjectId(id) }, { $set: objectToUpdate }, (err, result) => {
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