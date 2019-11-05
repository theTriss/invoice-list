import { createStore, applyMiddleware, combineReducers } from "redux";
import appReducer from "./reducers/app-reducer";
import reduxThunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  app: appReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(reduxThunk));

window.store = store;

export default store;
