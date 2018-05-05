import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadGlyphs } from '../actions/glyphActions';
import './App.css';

import StargateIcon from './StargateIcon/StargateIcon';
import ChevronStatuses from './ChevronStatuses/ChevronStatuses';

import glyphImg1 from '../img/glyphs/1-earth-origin.svg';
import glyphImg2 from '../img/glyphs/2-crater.svg';
import glyphImg3 from '../img/glyphs/3-virgo.svg';
import glyphImg4 from '../img/glyphs/4-bootes.svg';
import glyphImg5 from '../img/glyphs/5-centaurus.svg';
import glyphImg6 from '../img/glyphs/6-libra.svg';
import glyphImg7 from '../img/glyphs/7-serpens-caput.svg';
import glyphImg8 from '../img/glyphs/8-norma.svg';
import glyphImg9 from '../img/glyphs/9-scorpius.svg';
import glyphImg10 from '../img/glyphs/10-corona-australis.svg';

import glyphImg11 from '../img/glyphs/11-scutum.svg';
import glyphImg12 from '../img/glyphs/12-sagittarius.svg';
import glyphImg13 from '../img/glyphs/13-aquila.svg';
import glyphImg14 from '../img/glyphs/14-microscopium.svg';
import glyphImg15 from '../img/glyphs/15-capricornus.svg';
import glyphImg16 from '../img/glyphs/16-piscis-austrinus.svg';
import glyphImg17 from '../img/glyphs/17-equuleus.svg';
import glyphImg18 from '../img/glyphs/18-aquarius.svg';
import glyphImg19 from '../img/glyphs/19-pegasus.svg';
import glyphImg20 from '../img/glyphs/20-sculptor.svg';

import glyphImg21 from '../img/glyphs/21-pisces.svg';
import glyphImg22 from '../img/glyphs/22-andromeda.svg';
import glyphImg23 from '../img/glyphs/23-triangulum.svg';
import glyphImg24 from '../img/glyphs/24-aries.svg';
import glyphImg25 from '../img/glyphs/25-perseus.svg';
import glyphImg26 from '../img/glyphs/26-cetus.svg';
import glyphImg27 from '../img/glyphs/27-taurus.svg';
import glyphImg28 from '../img/glyphs/28-auriga.svg';
import glyphImg29 from '../img/glyphs/29-eridanus.svg';
import glyphImg30 from '../img/glyphs/30-orion.svg';

import glyphImg31 from '../img/glyphs/31-canis-minor.svg';
import glyphImg32 from '../img/glyphs/32-monoceros.svg';
import glyphImg33 from '../img/glyphs/33-gemini.svg';
import glyphImg34 from '../img/glyphs/34-hydra.svg';
import glyphImg35 from '../img/glyphs/35-lynx.svg';
import glyphImg36 from '../img/glyphs/36-cancer.svg';
import glyphImg37 from '../img/glyphs/37-sextans.svg';
import glyphImg38 from '../img/glyphs/38-leo-minor.svg';
import glyphImg39 from '../img/glyphs/39-leo.svg';

const glyphArray = [
  {
    id: 1,
    glyph: glyphImg1
  },
  {
    id: 2,
    glyph: glyphImg2
  },
  {
    id: 3,
    glyph: glyphImg3
  },
  {
    id: 4,
    glyph: glyphImg4
  },
  {
    id: 5,
    glyph: glyphImg5
  },
  {
    id: 6,
    glyph: glyphImg6
  },
  {
    id: 7,
    glyph: glyphImg7
  },
  {
    id: 8,
    glyph: glyphImg8
  },
  {
    id: 9,
    glyph: glyphImg9
  },
  {
    id: 10,
    glyph: glyphImg10
  },
  {
    id: 11,
    glyph: glyphImg11
  },
  {
    id: 12,
    glyph: glyphImg12
  },
  {
    id: 13,
    glyph: glyphImg13
  },
  {
    id: 14,
    glyph: glyphImg14
  },
  {
    id: 15,
    glyph: glyphImg15
  },
  {
    id: 16,
    glyph: glyphImg16
  },
  {
    id: 17,
    glyph: glyphImg17
  },
  {
    id: 18,
    glyph: glyphImg18
  },
  {
    id: 19,
    glyph: glyphImg19
  },
  {
    id: 20,
    glyph: glyphImg20
  },
  {
    id: 21,
    glyph: glyphImg21
  },
  {
    id: 22,
    glyph: glyphImg22
  },
  {
    id: 23,
    glyph: glyphImg23
  },
  {
    id: 24,
    glyph: glyphImg24
  },
  {
    id: 25,
    glyph: glyphImg25
  },
  {
    id: 26,
    glyph: glyphImg26
  },
  {
    id: 27,
    glyph: glyphImg27
  },
  {
    id: 28,
    glyph: glyphImg28
  },
  {
    id: 29,
    glyph: glyphImg29
  },
  {
    id: 30,
    glyph: glyphImg30
  },
  {
    id: 31,
    glyph: glyphImg31
  },
  {
    id: 32,
    glyph: glyphImg32
  },
  {
    id: 33,
    glyph: glyphImg33
  },
  {
    id: 34,
    glyph: glyphImg34
  },
  {
    id: 35,
    glyph: glyphImg35
  },
  {
    id: 36,
    glyph: glyphImg36
  },
  {
    id: 37,
    glyph: glyphImg37
  },
  {
    id: 38,
    glyph: glyphImg38
  },
  {
    id: 39,
    glyph: glyphImg39
  },
];

class App extends Component {
  constructor(props, context) {
    super(props, context);
    props.loadGlyphs(glyphArray);
  }

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
            <StargateIcon />
            <ChevronStatuses chevrons={this.props.chevrons} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  loadGlyphs: PropTypes.func.isRequired,
  chevrons: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    glyphs: state.glyphs,
    chevrons: state.chevrons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadGlyphs: bindActionCreators(loadGlyphs, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
