import {
  compose,
  combineReducers,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/auth.reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
