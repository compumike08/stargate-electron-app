import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { sortGlyphs } from '../utils/utils';

export default function combinedStatusReducer(state = initialState.glyphs, action) {
  switch (action.type) {
    case types.GLYPHS_LOADED: {
      return sortGlyphs(action.glyphs);
    }
    default: {
      return state;
    }
  }
}
