import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { sortChevrons } from '../utils/utils';
import { CHEVRON_STATUSES } from '../utils/constants';

export default function combinedStatusReducer(state = initialState.chevrons, action) {
  switch (action.type) {
    case types.CHEVRON_ENCODED: {
      console.log(state);

      const targetChevron = state.find(chevron => chevron.num === action.chevronNum);

      targetChevron.glyphId = parseInt(action.glyphId);
      targetChevron.status = CHEVRON_STATUSES.ENCODED;

      const tempChevrons = [
        ...state.filter(chevron => chevron.num !== action.chevronNum),
        Object.assign({}, targetChevron)
      ];

      return sortChevrons(tempChevrons);
    }
    default: {
      return state;
    }
  }
}
