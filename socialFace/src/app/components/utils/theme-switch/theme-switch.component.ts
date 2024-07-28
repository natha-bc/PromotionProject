import { Component } from '@angular/core';
import { setTheme } from '../../../store/actions/theme.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/index.reducers';
import { selectTheme } from '../../../store/selectors/theme.selectors';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css'
})
export class ThemeSwitchComponent {

  currentTheme: string | undefined;

  constructor(private store: Store<AppState>) {
    this.store.select(selectTheme).subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme($event:Event) {
    const THEME_SWITCH = $event.target as HTMLInputElement | null;
    if (THEME_SWITCH && THEME_SWITCH.checked !== undefined) {
      this.currentTheme = THEME_SWITCH.checked ? 'dark-theme' : 'light-theme';      
      this.store.dispatch(setTheme({ theme: this.currentTheme }));
    }
  }

}
