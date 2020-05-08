import { combineReducers } from "redux"
import todo from "./todosReducer"
import visible from "./visibleReducer"

const rootReducer = combineReducers({ todo: todo, visible: visible })

export default rootReducer
