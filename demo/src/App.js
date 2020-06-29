import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App" data-test='component-app'>
        <h1>Learn react testing!!!</h1>
        <h1 data-test='counter-display'> Te counter is curently: </h1>
        <button data-test='increment-button'>Increment counter</button>
      </div>
      
    );
  }
  
}

export default App;
