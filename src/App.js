import React, { Component } from 'react';
import TopFilter from './components/topFilter.js';
import Adverts from './components/adverts.js';
import BottomFilter from './components/bottomFilter.js';
import GameCard from './components/card.js';
import 'normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      datajson: [],
      initialdata: [],
      filterkey: 0,
      bottomfilter: -1
    }
  }
  componentDidMount() {
    fetch('data/game_data.json').then(response => {
        return response.json();
      }).then(data => {
        this.state.datajson.push(...data);
        this.state.initialdata.push(...data);
        this.setState({
          datajson: this.state.datajson
        });
      });
  }
  keyfilter(key, named) {
    let data = this.state.initialdata.slice(0);
    if(named !== "All") { 
      if(named === "Cricket") {
        data = data.filter((item)=>{
          return item.sportName === "cricket";
        });
      } else if(named === "Football") {
        data = data.filter((item)=>{
          return item.sportName === "football";
        });
      }
    }
    this.setState({
      datajson: data,
      filterkey: key,
      bottomfilter: -1
    });
  }
  bottomclick(keynum) {
    let data = this.state.initialdata.slice(0);
    data = data.filter((item) => {
      return item.isJoined === keynum;
    });
    this.setState({
      datajson: data,
      bottomfilter: keynum,
      filterkey: -1
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Challenges</h1>
        <TopFilter keyfilter={this.keyfilter.bind(this)} keydata={this.state.filterkey} />
        <Adverts />
        <GameCard carddata={this.state.datajson} />
        <BottomFilter bottomfilter={this.state.bottomfilter} bottomclick={this.bottomclick.bind(this)} />
        <img src="images/Ad-480x160.png" alt="Advertisement" />
      </div>
    );
  }
}

export default App;
