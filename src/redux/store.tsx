import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
const logger = createLogger({
  // ...options
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
