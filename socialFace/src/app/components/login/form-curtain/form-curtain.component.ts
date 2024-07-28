import { Component } from '@angular/core';
import { AppState } from '../../../store/reducers/index.reducers';
import { Store } from '@ngrx/store';
import { setFormToShow } from '../../../store/actions/landingPage.actions';
import { selectFormToShow } from '../../../store/selectors/landingPage.selectors';
import { LOGIN_FORM, SIGN_IN_FORM } from '../../../constants/constants';

@Component({
  selector: 'app-form-curtain',
  templateUrl: './form-curtain.component.html',
  styleUrl: './form-curtain.component.css'
})
export class FormCurtainComponent {

  currentForm: string | undefined;

  constructor(private store:Store<AppState>) {
    this.store.select(selectFormToShow).subscribe(formToShow => {
      this.currentForm = formToShow;
    });
  }

  toggleForm() {
    let formToShow = this.currentForm === LOGIN_FORM ? SIGN_IN_FORM : LOGIN_FORM;
    this.store.dispatch(setFormToShow({ formToShow: formToShow }));
  }
}
