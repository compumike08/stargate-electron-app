import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChevronStatus from '../ChevronStatus/ChevronStatus';

const ChevronStatuses = ({chevron1, chevron2, chevron3, chevron4, chevron5, chevron6, chevron7}) => (
  <div className="cheveron-statuses col-sm-2">
    <ChevronStatus num="1" glyph={chevron1.glyph} />
    <ChevronStatus num="2" glyph={chevron2.glyph} />
    <ChevronStatus num="3" glyph={chevron3.glyph} />
    <ChevronStatus num="4" glyph={chevron4.glyph} />
    <ChevronStatus num="5" glyph={chevron5.glyph} />
    <ChevronStatus num="6" glyph={chevron6.glyph} />
    <ChevronStatus num="7" glyph={chevron7.glyph} />
  </div>
);

ChevronStatuses.propTypes = {
  chevron1: PropTypes.object.isRequired,
  chevron2: PropTypes.object.isRequired,
  chevron3: PropTypes.object.isRequired,
  chevron4: PropTypes.object.isRequired,
  chevron5: PropTypes.object.isRequired,
  chevron6: PropTypes.object.isRequired,
  chevron7: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const chevron1Status = state.chevron1;
  const chevron2Status = state.chevron2;
  const chevron3Status = state.chevron3;
  const chevron4Status = state.chevron4;
  const chevron5Status = state.chevron5;
  const chevron6Status = state.chevron6;
  const chevron7Status = state.chevron7;

  const chevron1Glyph = chevron1Status.glyphId ? state.glyphs.find(glyph => glyph.id === chevron1Status.glyphId).glyph : null;
  const chevron2Glyph = chevron2Status.glyphId ? state.glyphs.find(glyph => glyph.id === chevron2Status.glyphId).glyph : null;
  const chevron3Glyph = chevron3Status.glyphId ? state.glyphs.find(glyph => glyph.id === chevron3Status.glyphId).glyph : null;
  const chevron4Glyph = chevron4Status.glyphId ? state.glyphs.find(glyph => glyph.id === chevron4Status.glyphId).glyph : null;
  const chevron5Glyph = chevron5Status.glyphId ? state.glyphs.find(glyph => glyph.id === chevron5Status.glyphId).glyph : null;
  const chevron6Glyph = chevron6Status.glyphId ? state.glyphs.find(glyph => glyph.id === chevron6Status.glyphId).glyph : null;
  const chevron7Glyph = chevron7Status.glyphId ? state.glyphs.find(glyph => glyph.id === chevron7Status.glyphId).glyph : null;

  return {
    chevron1: {
      ...chevron1Status,
      glyph: chevron1Glyph
    },
    chevron2: {
      ...chevron2Status,
      glyph: chevron2Glyph
    },
    chevron3: {
      ...chevron3Status,
      glyph: chevron3Glyph
    },
    chevron4: {
      ...chevron4Status,
      glyph: chevron4Glyph
    },
    chevron5: {
      ...chevron5Status,
      glyph: chevron5Glyph
    },
    chevron6: {
      ...chevron6Status,
      glyph: chevron6Glyph
    },
    chevron7: {
      ...chevron7Status,
      glyph: chevron7Glyph
    }
  };
}

export default connect(mapStateToProps)(ChevronStatuses);
