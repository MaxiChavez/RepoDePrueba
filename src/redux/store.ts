import { configureStore } from "@reduxjs/toolkit";

import { Storage } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import thunk from "redux-thunk";

const reducers = combineReducers({});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
