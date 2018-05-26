import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { CHEVRON_STATUSES } from '../utils/constants';

export default function chevron4Reducer(state = initialState.chevron4, action) {
  switch (action.type) {
    case types.CHEVRON4_ENCODED: {
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
