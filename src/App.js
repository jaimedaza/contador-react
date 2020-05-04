import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    counter: 0
  };
  
   contar = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

 
  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button onClick={this.contar} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
