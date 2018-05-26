import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { CHEVRON_STATUSES } from '../utils/constants';

export default function chevron6Reducer(state = initialState.chevron6, action) {
  switch (action.type) {
    case types.CHEVRON6_ENCODED: {
      return {
        glyphId: parseInt(action.glyphId),
        status: CHEVRON_STATUSES.ENCODED
      };
    }
    default: {
      return state;
    }
  }
}
