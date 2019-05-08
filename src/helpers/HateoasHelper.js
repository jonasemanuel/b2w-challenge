import dotenv from 'dotenv';

export default class HateoasHelper {
    constructor() {
        dotenv.config();
    }

    generate(resource, resourceType, rel){
        if(Array.isArray(resource)){
            resource.forEach(item => {
                item.links = [{
                    rel,
                    href: `${this.getBaseUrl()}/${resourceType}/${item._id}`
                }];
            })
        } else {
            resource.links = [{
                rel,
                href: `${this.getBaseUrl()}/${resourceType}/${resource._id}`
            }];
        }

        return resource;
    }

    getBaseUrl(){
        if(process.env.PORT != 80){
            return `http://${process.env.APP_HOSTNAME}:${process.env.PORT}`;
        } else {
            return `http://${process.env.APP_HOSTNAME}`;
        }
    }
}