// Set up your root reducer here...
import { combineReducers } from 'redux';
import glyphs from './glyphReducer';
import chevron1 from './chevron1Reducer';
import chevron2 from './chevron2Reducer';
import chevron3 from './chevron3Reducer';
import chevron4 from './chevron4Reducer';
import chevron5 from './chevron5Reducer';
import chevron6 from './chevron6Reducer';
import chevron7 from './chevron7Reducer';

const rootReducer = combineReducers({
  glyphs,
  chevron1,
  chevron2,
  chevron3,
  chevron4,
  chevron5,
  chevron6,
  chevron7,
});

export default rootReducer;
