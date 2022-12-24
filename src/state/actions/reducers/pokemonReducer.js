const initialState = {
    pokemon: [],
    loading: true
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getPokemon":
            return {
                ...state,
                pokemon: action.payload,
                loading: false
            }

        case "createPokemon":
            return {
                ...state,
                pokemon: [...state.pokemon, action.payload],
                loading: false
            }

        case "updatePokemon":
            return {
                ...state,
                updatedData: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default pokemonReducer