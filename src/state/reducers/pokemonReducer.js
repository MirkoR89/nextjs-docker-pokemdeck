const initialState = {
    pokemon: [],
    loading: true
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getPokemon":
            return {
                ...state,
                getPokemon: action.payload,
                loading: false
            }

        case "createPokemon":
            return {
                ...state,
                pokemon: [...state, action.payload],
                loading: false
            }

        case "updatePlayer":
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