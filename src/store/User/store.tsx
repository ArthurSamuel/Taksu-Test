import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./User";

export const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

export type AuthState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
