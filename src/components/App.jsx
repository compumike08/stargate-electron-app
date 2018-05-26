import React, { Component } from 'react';
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
            <ChevronStatuses />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    glyphs: state.glyphs
  };
}

export default connect(mapStateToProps)(App);
