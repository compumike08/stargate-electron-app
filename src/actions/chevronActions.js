import * as types from '../actions/actionTypes';

function chevron1Encoded(glyphId) {
  return { type: types.CHEVRON1_ENCODED, glyphId };
}

export function encodeChevron1(glyphId) {
  return (dispatch) => {
    dispatch(chevron1Encoded(glyphId));
  };
}

function chevron2Encoded(glyphId) {
  return { type: types.CHEVRON2_ENCODED, glyphId };
}

export function encodeChevron2(glyphId) {
  return (dispatch) => {
    dispatch(chevron2Encoded(glyphId));
  };
}

function chevron3Encoded(glyphId) {
  return { type: types.CHEVRON3_ENCODED, glyphId };
}

export function encodeChevron3(glyphId) {
  return (dispatch) => {
    dispatch(chevron3Encoded(glyphId));
  };
}

function chevron4Encoded(glyphId) {
  return { type: types.CHEVRON4_ENCODED, glyphId };
}

export function encodeChevron4(glyphId) {
  return (dispatch) => {
    dispatch(chevron4Encoded(glyphId));
  };
}

function chevron5Encoded(glyphId) {
  return { type: types.CHEVRON5_ENCODED, glyphId };
}

export function encodeChevron5(glyphId) {
  return (dispatch) => {
    dispatch(chevron5Encoded(glyphId));
  };
}

function chevron6Encoded(glyphId) {
  return { type: types.CHEVRON6_ENCODED, glyphId };
}

export function encodeChevron6(glyphId) {
  return (dispatch) => {
    dispatch(chevron6Encoded(glyphId));
  };
}

function chevron7Encoded(glyphId) {
  return { type: types.CHEVRON7_ENCODED, glyphId };
}

export function encodeChevron7(glyphId) {
  return (dispatch) => {
    dispatch(chevron7Encoded(glyphId));
  };
}
