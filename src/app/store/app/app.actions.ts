import { createAction, props } from '@ngrx/store';

export const setValue1 = createAction(
  '[App] Set value 1',
  props<{ value: number }>(),
);

export const addToValue1 = createAction(
  '[App] Add to value 1',
  props<{ value: number }>(),
);

export const setValue2 = createAction(
  '[App] Set value 2',
  props<{ value: string }>(),
);
