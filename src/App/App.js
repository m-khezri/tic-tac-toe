import React, { Component } from 'react';
import './App.scss';
import { Button, Icon } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center"> Tic-Tac-Toe </h1>
        <Button waves='waves-effect waves-light btn-large'>Let's get started!<Icon left>started</Icon></Button>
      </div>
    );
  }
}
export default App;