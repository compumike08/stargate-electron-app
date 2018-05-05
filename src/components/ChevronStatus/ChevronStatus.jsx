import React from 'react';
import PropTypes from 'prop-types';

const ChevronStatus = ({ num, glyph }) => (
  <div className={`chevron-holder chevron-holder--${num} row`}>
    <div className={`chevron-label chevron-label--${num} col-sm-1`}>
      {num}
    </div>
    <div className="chevron-status col-sm-10">
      <div className="panel panel-default">
        {glyph ? <img className={`glyph glyph-${num}`} src={glyph} /> : null }
      </div>
    </div>
  </div>
);

ChevronStatus.defaultProps = {
  glyph: null
};

ChevronStatus.propTypes = {
  num: PropTypes.number.isRequired,
  glyph: PropTypes.string
};

export default ChevronStatus;
