import React from 'react';
import PropTypes from 'prop-types';
import ChevronStatus from '../ChevronStatus/ChevronStatus';

const ChevronStatuses = ({ glyphs }) => (
  <div className="cheveron-statuses col-sm-2">
    <ChevronStatus num={1} />
    <ChevronStatus num={2} />
    <ChevronStatus num={3} />
    <ChevronStatus num={4} />
    <ChevronStatus num={5} />
    <ChevronStatus num={6} />
    <ChevronStatus num={7} />
  </div>
);

ChevronStatuses.propTypes = {
  glyphs: PropTypes.array.isRequired
};

export default ChevronStatuses;
