import { RootState, TypesDispatch } from "./reducers.types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<TypesDispatch<RootState>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
