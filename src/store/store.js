import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { footballApi } from "./footballAPI";

export const store = configureStore({
    reducer: {
        [footballApi.reducerPath]: footballApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(footballApi.middleware),
})