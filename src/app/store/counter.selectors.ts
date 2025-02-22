import { createSelector } from "@ngrx/store";

export const countSelector = (state: {counter:number}) => state.counter;
export const doubleSelector = createSelector(
    countSelector,
    (count:number) =>  count*3
)