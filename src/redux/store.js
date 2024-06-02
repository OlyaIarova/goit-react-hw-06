import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactReducer } from "./contactSlice";
import { filterContactReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterContactReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistedStore = persistStore(store);