import { createReducer } from '@ngrx/store';

const initialState = 0;
const initialState2 = '';

export const value1Reducer = createReducer(initialState);
export const value2Reducer = createReducer(initialState2);
