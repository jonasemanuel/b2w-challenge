import PlanetRepository from "../repositories/PlanetRepository";
import Planet from "../models/Planet";

const planetRepository = new PlanetRepository();

export async function findAll(request, response) {
    try {
        let planets = await planetRepository.findAll();
        response.json(planets);
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
        let createdPlanet = await planetRepository.add(planet);
        response.status(201).json(createdPlanet[0]);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function find(request, response) {
    try {
        let planet = await planetRepository.find(request.params.id);
        response.json(planet);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function update(request, response) {
    let planet = new Planet();ENtend
    planet._id = request.body._id;
    planet.itens = request.body.itens;
    planet.total = request.body.total;
    planet.totalResources = request.body.totalResources;
    try {
        await planetRepository.update(planet);
        response.status(200).end();
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