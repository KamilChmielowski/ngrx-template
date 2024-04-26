import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { AppEffects } from './store/app/app.effects';
import { routes } from './app.routes';
import { value1Reducer, value2Reducer } from './store/app/app.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      value1: value1Reducer,
      value2: value2Reducer,
    }),
    provideEffects([
      AppEffects,
    ]),
  ]
};
