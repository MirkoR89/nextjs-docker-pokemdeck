const initialState = {
    pokemon: [],
    allPokemon: [],
    pokemonFiltered: null,
    deck: [],
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

        case "addCard":
            const maxDeck = state.deck.length === 11 && state.deck.shift()
            return {
                ...state,
                deck: state.deck.length === 11 ? [...maxDeck, action.payload] : [...state.deck, action.payload],
                loading: false
            }

        default:
            return state
    }
}

export default pokemonReducer