import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChevronStatus from '../ChevronStatus/ChevronStatus';

const ChevronStatuses = ({ chevrons }) => (
  <div className="cheveron-statuses col-sm-2">
    {chevrons.map(chevron => <ChevronStatus num={chevron.num} glyph={chevron.glyph} />)}
  </div>
);

ChevronStatuses.propTypes = {
  chevrons: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const chevronStatusArray = state.chevrons.map((chevron) => {
    if (chevron.glyphId) {
      const targetGlyph = state.glyphs.find(glyph => glyph.id === chevron.glyphId);
      return {
        ...chevron,
        glyph: targetGlyph.glyph
      };
    }

    return {
      ...chevron,
      glyph: null
    };
  });

  return {
    chevrons: chevronStatusArray
  };
}

export default connect(mapStateToProps)(ChevronStatuses);
