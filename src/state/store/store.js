import { legacy_createStore as createStore, applyMiddleware } from "redux";

// Import thunk middleware
import thunk from "redux-thunk";
import reducers from "../reducers";


// Import all reducers created

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)