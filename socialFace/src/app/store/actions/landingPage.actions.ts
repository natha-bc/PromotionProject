import { createAction, props } from '@ngrx/store';

export const setFormToShow = createAction(
  '[formToShow] Set formToShow',
  props<{ formToShow: string }>()
);
