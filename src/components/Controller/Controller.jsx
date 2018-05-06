/* eslint-disable no-alert */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';

import * as chevronActions from '../../actions/chevronActions';

class Controller extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleDial = this.handleDial.bind(this);
  }

  handleDial() {
    const glyph1 = window.prompt("Enter 1st glyph ID");

    this.props.chevronActions.encodeChevron(glyph1, 1);
  }

  render() {
    return (
      <div className="col-sm-2">
        <Button
          bsStyle="primary"
          onClick={this.handleDial}
        >
          DIAL
        </Button>
      </div>
    );
  }
}

Controller.propTypes = {
  chevronActions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    chevronActions: bindActionCreators(chevronActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Controller);
