// Set up your root reducer here...
import { combineReducers } from 'redux';
import glyphs from './glyphReducer';
import chevrons from './chevronReducer';

const rootReducer = combineReducers({
  glyphs,
  chevrons
});

export default rootReducer;
