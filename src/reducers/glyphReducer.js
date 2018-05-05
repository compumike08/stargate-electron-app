import initialState from './initialState';

export default function combinedStatusReducer(state = initialState.glyphs, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
