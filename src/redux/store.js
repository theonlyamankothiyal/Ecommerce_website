import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import bagReducer from "./reducer/bagReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { configure } from "@testing-library/react";

const persistConfig={
    key : 'root',
    storage,
}


/* const store=configureStore({
    reducer:{
        bag:bagReducer
    }
}) */

const rootReducer =combineReducers({
    bag : bagReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store =configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>[
        ...getDefaultMiddleware({
            serializableCheck:false
        }),
    ]
});
const persistor =persistStore(store);
export {store, persistor} 