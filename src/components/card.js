//insert code here to show each individual card


import React from 'react';
import footpng from '../images/Foob-48.png';
import cricpng from '../images/Cric-48.png';
import allpng from '../images/All-48.png';

class GameCard extends React.Component {
 render() {
 	const cardhtml = this.props.carddata.map((item, key)=>{
 	let gameicon;
 	if(typeof item.sportName === 'string') {
 		if(item.sportName === 'football') {
 			gameicon = footpng;
	 	} else if(item.sportName === 'cricket') {
	 		gameicon = cricpng;
	 	}
 	} else {
 		gameicon = allpng;
 	}
 	return (<div key={key} className="cardOne">
        <div>
        <div className="cardTitle">
        <div>
        <h3>{item.name}</h3>
        <span>{item.tournament.join(' ')}</span>
        </div>
        <div className="iconDate">
        <img src={gameicon} alt="Cricket" width="20" />
        <span>10th Jan</span>
        </div>
        </div>
        <div className="cardDetail">
        <div>
        <h6>Prizes</h6>
        <span className="green">&#8377; {item.prizes}</span>
        </div>
        <div>
        <h6>Games</h6>
        <span>{item.games}</span>
        </div>
        <div>
        <h6>Starts In</h6>
        <span>0h 22M 16S</span>
        </div>
        </div>
        </div>
        </div>);
 	});
    return (
      <div>
        {cardhtml}
      </div>);
  }
}

export default GameCard;

