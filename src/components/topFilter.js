//insert code here for the top filter in the design (sports filter)
//There are 3 filters -> All, Cricket, Football
//Each filter has a corresponding image with it saved in hello-world-react/assets/
//Should return a component which allows to filter the data on the main card
//Include CSS in this

import React from 'react';
import allimg from '../images/All-48.png';
import cricimg from '../images/Cric-48.png';
import foobimg from '../images/Foob-48.png';

class TopFilter extends React.Component {
 render() {
 	const datafilter = [{name: "All", icon: allimg}, {name: "Cricket", icon: cricimg}, {name: "Football", icon: foobimg}];
 	const lidesign = datafilter.map((item, key) => {
 		return (<li key={key} onClick={this.props.keyfilter.bind(this, key, item.name)} className={this.props.keydata === key ? "active" : ""} ><img src={item.icon} alt={item.name} width="30"/><span>{item.name}</span></li>);
 	});
    return (
      <div className="containFilter">
       <ul className="filterData">
       {lidesign}
       </ul>
      </div>);
  }
}

export default TopFilter;

