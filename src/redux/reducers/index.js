import { combineReducers } from "redux";
import filterReducer from "./filters";
import pizzaReducer from "./pizzas";

const rootReducer = combineReducers({
  filters: filterReducer,
  pizzas: pizzaReducer,
});

export default rootReducer;