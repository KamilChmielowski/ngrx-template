import { createSelector } from '@ngrx/store';

export const selectValue1 = (state: { value1: number }) => state.value1;

export const selectDoubleValue1 = createSelector(
  selectValue1,
  (state) => state * 2,
);

export const selectValue2 = (state: { value2: string }) => state.value2;
