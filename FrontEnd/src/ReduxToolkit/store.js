import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage,
    // whitelist:['Auth']
}
const persistedReducer = persistReducer(persistConfig,AuthSlice)

export const store = configureStore({
    reducer:{
        Auth:persistedReducer
    }
})

export const persistor = persistStore(store)