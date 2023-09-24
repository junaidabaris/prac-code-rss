import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { allApiConfig } from "./bannerSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    // [productsApi.reducerPath]: productsApi.reducer,
    [allApiConfig.reducerPath]: allApiConfig.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat(
            // productsApi.middleware,
            allApiConfig.middleware
        )
    },

});

export const persistor = persistStore(store)