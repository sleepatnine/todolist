import { legacy_createStore as createStore } from "redux";

import { todoReduser } from "./redusers/AppReducer/todoReduser";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(todoReduser, composeWithDevTools() ) 

export type RootState = ReturnType<typeof todoReduser>
export type AppDispatch = typeof store.dispatch