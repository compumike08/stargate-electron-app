import React from 'react';
import stargateLogo from '../../img/Milky_Way_stargate.png';
import './StargateIcon.css';

const StargateIcon = () => (
  <div className="stargate-icon col-sm-8 col-sm-offset-2">
    <img src={stargateLogo} />
  </div>
);

export default StargateIcon;
