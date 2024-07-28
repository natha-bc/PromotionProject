import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/index.reducers';
import { selectFormToShow } from '../../../store/selectors/landingPage.selectors';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  animations: [
    trigger('slide', [
      state('left', style({
        transform: 'translateX(0)'
      })),
      state('right', style({
        transform: 'translateX(100%)'
      })),
      transition('left <=> right', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]

})
export class LandingPageComponent {
  formToShow : string | undefined;
  constructor(private store: Store<AppState>) {
    this.store.select(selectFormToShow).subscribe(formToShow => {
      this.formToShow = formToShow;
    });
  }
}
