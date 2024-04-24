import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppStore } from './app.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  value1$: Observable<number>;
  value2$: Observable<string>;

  constructor(private store: Store<AppStore>) {
    this.value1$ = store.select('value1');
    this.value2$ = store.select('value2');
  }
}
