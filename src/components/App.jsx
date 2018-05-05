import React, { Component } from 'react';
import stargateLogo from '../img/Milky_Way_stargate.png';
import glyphEarthOrigin from '../img/glyphs/1-earth-origin.svg';
import './App.css';

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
            <div className="stargate-icon col-sm-8 col-sm-offset-2">
              <img src={stargateLogo} width="700px" height="700px" />
            </div>
            <div className="cheveron-statuses col-sm-2">
              <div className="chevron-holder row">
                <div className="chevron-label chevron-label--1 col-sm-1">
                  1
                </div>
                <div className="chevron-status col-sm-10">
                  <div className="panel panel-default">
                    <img className="glyph glyph-1" src={glyphEarthOrigin} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
