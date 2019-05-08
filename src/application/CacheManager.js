import redis from 'redis';

export default class CacheManager {
    constructor() {
        this.client = redis.createClient({ db: 1 });
    }

    setKey(key, value){
        this.client.set(key, value, 'EX', 86400);
    }

    getKey(key){
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, value) => {
                if(!err) {
                    resolve(value);
                } else{
                    reject(err);
                } 
            });
        })
    }
}