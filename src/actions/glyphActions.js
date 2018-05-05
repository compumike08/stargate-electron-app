import * as types from './actionTypes';

function glyphsLoaded(glyphs) {
  return { type: types.GLYPHS_LOADED, glyphs };
}

export function loadGlyphs(glyphs) {
  return (dispatch) => {
    dispatch(glyphsLoaded(glyphs));
  };
}
