import * as Raven from 'raven-js';
import { ActionReducer, Action } from '@ngrx/store';


export function sentryLogger(reducer): ActionReducer<any> {
  return function (state = {}, action: Action) {
    if (!Raven.isSetup()) {
        console.warn('Raven-js is not configured');
    }
    return reducer(state, action);
  };
}