import { combineReducers, applyMiddleware } from "redux";
import SearchCountryByName from "./Buscador";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const reducersApp = combineReducers({
  SearchCountryByName
});
export const store = createStore(
  reducersApp,
  composeWithDevTools(applyMiddleware(logger, thunk, promise))
);

export default store;
