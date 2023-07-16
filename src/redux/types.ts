import { TodoAction } from "./redusers/AppReducer/types";

export interface IAction { 
    type: string;
    payload: TodoAction;
}
