import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { store } from "./reducers";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TypesDispatch<T> = ThunkDispatch<T, any, Action>;
