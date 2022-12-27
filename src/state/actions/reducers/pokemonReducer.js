const initialState = {
    pokemon: [],
    allPokemon: [],
    pokemonFiltered: null,
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

        case "getAllPokemon":
            return {
                ...state,
                allPokemon: action.payload,
                loading: false
            }

        case "filterPokemon":
            console.log(action.payload);
            const pokemonRegex = new RegExp(`${action.payload}`, 'ig')

            return {
                ...state,
                pokemonFiltered: state.allPokemon.filter(p => {
                    return p.name?.match(pokemonRegex)
                }),
                loading: false
            }

        case "clearFilterPokemon":
            return {
                ...state,
                pokemonFiltered: null,
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