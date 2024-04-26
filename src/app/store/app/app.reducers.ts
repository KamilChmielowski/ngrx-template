import { createReducer, on } from '@ngrx/store';

import { addToValue1, setValue1, setValue2 } from './app.actions';

const initialState = 0;
const initialState2 = '...';

export const value1Reducer = createReducer(
  initialState,
  on(setValue1, (state, actions) => actions.value),
  on(addToValue1, (state, actions) => state + actions.value),
);

export const value2Reducer = createReducer(
  initialState2,
  on(setValue2, (state, actions) => actions.value),
);
