import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  product: productReducer
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
