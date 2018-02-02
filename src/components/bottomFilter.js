//insert code here for the bottom filter in the design (Challenges or in-play)
//Each filter has a corresponding image with it saved in hello-world-react/assets/
//Should return a component which allows to filter the data on the main card
//Include CSS in this file

import React from 'react';
import playline from '../images/In-Play-Line.png';
import play from '../images/In-Play.png';
import challenges from '../images/Challenges.png';
import challengesline from '../images/Challenges-Line.png';

class BottomFilter extends React.Component {
 render() {
    return (
      <div className="bottomFilter">
      <div onClick={this.props.bottomclick.bind(this, 0)}>
      <img src={this.props.bottomfilter === 0 ? challenges : challengesline} alt="Challenges" width="20" />
      <span>Challenges</span>
      </div>
      <div onClick={this.props.bottomclick.bind(this, 1)}>
      <img src={this.props.bottomfilter === 1 ? play : playline} alt="Play" width="20" />
      <span>In Play</span>
      </div>
      </div>);
  }
}

export default BottomFilter;


