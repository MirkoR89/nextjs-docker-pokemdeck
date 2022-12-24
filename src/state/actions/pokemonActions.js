export const getPokemon = (pokemon) => {
    return {
        type: "getPokemon",
        payload: pokemon
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