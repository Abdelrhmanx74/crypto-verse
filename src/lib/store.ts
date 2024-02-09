import { configureStore } from '@reduxjs/toolkit';

import {cryptoApi} from "@/services/cryptoApi"
import { cryptoNewsApi } from '@/services/cryptoNewsApi';

export const makeStore = () => {
  return configureStore({
  reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer, 
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']