export const getPokemon = (pokemon) => {
    return {
        type: "getPokemon",
        payload: pokemon
    }
}

export const getAllPokemon = (pokemon) => {
    return {
        type: "getAllPokemon",
        payload: pokemon
    }
}

export const filterPokemon = (pokemon) => {
    return {
        type: "filterPokemon",
        payload: pokemon
    }
}

export const clearFilterPokemon = () => {
    return {
        type: "clearFilterPokemon"
    }
}

export const createPokemon = (pokemon) => {
    return {
        type: "createPokemon",
        payload: pokemon
    }
}

export const updatePokemon = (pokemon) => {
    return {
        type: "updatePokemon",
        payload: pokemon
    }
}