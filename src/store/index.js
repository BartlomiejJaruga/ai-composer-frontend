import { configureStore } from "@reduxjs/toolkit";
import composerReducer from "@slices/composerSlice";

export const store = configureStore({
    reducer: {
        composer: composerReducer,
    },
})