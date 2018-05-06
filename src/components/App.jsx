import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';

import Controller from './Controller/Controller';
import StargateIcon from './StargateIcon/StargateIcon';
import ChevronStatuses from './ChevronStatuses/ChevronStatuses';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="App-title">Stargate</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <Controller />
            <StargateIcon />
            <ChevronStatuses chevrons={this.props.chevrons} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  chevrons: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    glyphs: state.glyphs,
    chevrons: state.chevrons
  };
}

export default connect(mapStateToProps)(App);
