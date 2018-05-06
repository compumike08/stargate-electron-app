import * as types from '../actions/actionTypes';

function chevronEncoded(glyphId, chevronNum) {
  return { type: types.CHEVRON_ENCODED, glyphId, chevronNum };
}

export function encodeChevron(glyphId, chevronNum) {
  return (dispatch) => {
    dispatch(chevronEncoded(glyphId, chevronNum));
  };
}
