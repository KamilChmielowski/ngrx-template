import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs';

import { addToValue1, setValue1 } from './app.actions';
import { AppStore } from '../../app.store';
import { selectValue1 } from './app.selectors';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private store: Store<AppStore>) {}

  setValue1 = createEffect(() => {
    return this.actions$.pipe(
      ofType(setValue1, addToValue1),
      withLatestFrom(this.store.select(selectValue1)),
      tap(([action, value]) => {
        alert(`You have update value1 by ${ action.value } to: ${ value }`);
      }),
    )
  }, { dispatch: false });
}
