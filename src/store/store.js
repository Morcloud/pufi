import { createStore, combineReducers } from "redux";
import { formReducer } from "../reducers/formReducer";
import { productReducer } from "../reducers/productReducer";

const reducers = combineReducers({
    form: formReducer,
    product: productReducer,
    //Si se me ocurre otro
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
