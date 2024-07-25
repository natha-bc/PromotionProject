import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/reducers/index.reducers';
import { selectTheme } from './store/selectors/theme.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'socialFace';
  theme$: Observable<string>;

  constructor(private store: Store<AppState>) {
    
    this.theme$ = this.store.select(selectTheme);
    
    this.theme$.subscribe(theme => {      
      document.body.className = ''; // Clear existing classes
      document.body.classList.add(theme); // Add the new theme class
    });
  }
}
