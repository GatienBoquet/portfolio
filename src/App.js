import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      taxin: 1,
      taxout: 1,
      tps: 0.05,
      tvq: 0.09975
    };
    this.handleChange = this.handleChange.bind(this);
    this.taxoutChange = this.taxoutChange.bind(this);
  }
  handleChange(e){
    var tps = (e.target.value * (this.state.tps));
    var tvq = (e.target.value * (this.state.tvq));
    var total = (parseFloat(e.target.value) + parseFloat(tps) + parseFloat(tvq));
    this.setState({
      taxin: total.toFixed(2),
      taxout: e.target.value
    });
  }

  taxoutChange(e){
    var tps = (e.target.value * (this.state.tps));
    var tvq = (e.target.value * (this.state.tvq));
    var total = parseFloat(e.target.value) - parseFloat(tps) - parseFloat(tvq);
    this.setState({
      taxin: e.target.value,
      taxout: total.toFixed(2)
    });
  }

  render(){
    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="taxout">Tax Out:</label>
          <input type="text" id="taxout" name="taxout" value={this.state.taxout} onChange={this.handleChange}></input>
          <label htmlFor="taxin">Tax In (TPS et TVQ):</label>
          <input type="text" id="taxin" name="taxin" value={this.state.taxin} onChange={this.taxoutChange}></input>
          <p>
            Easy Tax In / Out <code>Magique</code>
          </p>
        </header>
      </div>
      </>
    );
  }
}

export default App;
