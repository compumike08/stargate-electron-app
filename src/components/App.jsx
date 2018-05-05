import React, { Component } from 'react';
import './App.css';

import StargateIcon from './StargateIcon/StargateIcon';
import ChevronStatuses from './ChevronStatuses/ChevronStatuses';

class App extends Component {
  render() {
    const tempGlyphsArray = [];
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
            <StargateIcon />
            <ChevronStatuses glyphs={tempGlyphsArray} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
