import PlanetRepository from "../repositories/PlanetRepository";
import Planet from "../models/Planet";
import StarWarsApiService from "../services/starwars.service";
import HateoasHelper from "../helpers/HateoasHelper";

const planetRepository = new PlanetRepository();

export async function findAll(request, response) {
    try {
        let planets = await planetRepository.findAll(request.query);
        response.json(new HateoasHelper().generate(planets, 'planets', 'self'));
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function create(request, response) {
    let planet = new Planet();
    planet.name = request.body.name;
    planet.climate = request.body.climate;
    planet.terrain = request.body.terrain;

    try {
        let starWarsApiService = new StarWarsApiService();
        planet.movieApparitionsCount = await starWarsApiService.getMovieApparitionsNumber(planet.name);
        let createdPlanet = await planetRepository.add(planet);

        response.status(201).json(new HateoasHelper().generate(createdPlanet[0], 'planets', 'self'));
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function find(request, response) {
    try {
        let planet = await planetRepository.find(request.params.id);
        response.json(new HateoasHelper().generate(planet[0], 'planets', 'self'));
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function update(request, response) {
    try {
        let starWarsApiService = new StarWarsApiService();
        let planet = new Planet();
        planet._id = request.body._id;
        planet.name = request.body.name;
        planet.climate = request.body.climate;
        planet.terrain = request.body.terrain;
        planet.movieApparitionsCount = await starWarsApiService.getMovieApparitionsNumber(planet.name);

        await planetRepository.update(planet);
        response.status(200).json(new HateoasHelper().generate(planet, 'planets', 'self'));
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function remove(request, response) {
    try {
        await planetRepository.remove(request.params.id);
        response.status(200).end();
    } catch (e) {
        response.status(500).json(e);
    }
}