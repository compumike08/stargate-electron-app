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

    this.state = {
      dialId: null
    };

    this.updateDialerState = this.updateDialerState.bind(this);
    this.handleDial = this.handleDial.bind(this);
  }

  updateDialerState(evt){
    return this.setState({ dialId: evt.target.value });
  }

  handleDial() {
    const glyph1 = this.state.dialId;
    this.props.chevronActions.encodeChevron1(glyph1);
  }

  render() {
    return (
      <div className="col-sm-2">
        <form>
          <input type="text" className="form-control" id="dialerInput" onChange={this.updateDialerState} />
          <Button
            bsStyle="primary"
            onClick={this.handleDial}
          >
            DIAL
          </Button>
        </form>
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
