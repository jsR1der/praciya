import {createContext, Dispatch, SetStateAction} from "react";
import {DefaultUserModel} from "../models/defaultUser.model.ts";

export type ContextValueType = DefaultUserModel | null
export type ContextActionType = Dispatch<SetStateAction<ContextValueType>> | null


export interface ContextModel {
    context: ContextValueType
    setContext: ContextActionType
}

export const defaultContextValue = (): ContextModel => ({context: null, setContext: null})

export const Context = createContext<ContextModel>(defaultContextValue());