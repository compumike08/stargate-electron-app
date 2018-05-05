import React from 'react';
import PropTypes from 'prop-types';
import glyphEarthOrigin from '../../img/glyphs/1-earth-origin.svg';

const ChevronStatus = ({ num }) => (
  <div className={`chevron-holder chevron-holder--${num} row`}>
    <div className={`chevron-label chevron-label--${num} col-sm-1`}>
      {num}
    </div>
    <div className="chevron-status col-sm-10">
      <div className="panel panel-default">
        <img className={`glyph glyph-${num}`} src={glyphEarthOrigin} />
      </div>
    </div>
  </div>
);

ChevronStatus.propTypes = {
  num: PropTypes.number.isRequired
};

export default ChevronStatus;
