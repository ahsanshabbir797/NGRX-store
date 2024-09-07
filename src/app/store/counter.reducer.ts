import { Action, createReducer, on } from "@ngrx/store";
// import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";
import {  decrement, increment } from "./counter.actions";


const initialState = 1;

//a declarative way of doing things

export const counterReducer = createReducer(
    initialState,
    on(increment,(state,action) => state + action.value),
    on(decrement,(state,action)=> state - action.value)
);




//an alternate and all-ngrx versions supported way of creating reducer functions (createReducer in the end also gives the below 
//implementation).

//can pass the below function just like the above function to the store function in appmodule

// export function counterReducer (state = initialState,action:CounterActions | Action) {
//     if(action.type === INCREMENT) {
//         return state + (action as IncrementAction).value
//     }
//     return state;
// }
