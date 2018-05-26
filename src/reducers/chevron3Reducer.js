import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { CHEVRON_STATUSES } from '../utils/constants';

export default function chevron3Reducer(state = initialState.chevron3, action) {
  switch (action.type) {
    case types.CHEVRON3_ENCODED: {
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
