export default class Resource {
    constructor(_id, name, climate, terrain, movieApparitionsCount) {
        this._id = _id;
        this.name = name;
        this.climate = climate;
        this.terrain = terrain;
        this.movieApparitionsCount = movieApparitionsCount;
    }
}