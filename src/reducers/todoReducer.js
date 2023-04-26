import {v4 as uuidv4} from "uuid"
import { TYPES } from "../actions/todoActions";

export const initialState = []
export const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}
export function todoReducer  (state,action) {
  
    switch(action.type){
      case TYPES.addTodo:
        return [...state,{id : uuidv4(), title : action.payload}]
      
      case TYPES.removeTodo:
        return state.filter(todo => todo.id !== action.payload.id)
      default : 
        return state
    }
  }