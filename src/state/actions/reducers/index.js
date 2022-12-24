import { combineReducers } from "redux";

// Import all reducers
import pokemonReducer from "./pokemonReducer";

const reducers = combineReducers({
    pokemon: pokemonReducer
})

export default reducers;