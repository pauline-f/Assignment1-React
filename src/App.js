import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username:"PaulineF"
  }

  changeUsernameHandler = () => {
    this.setState( {
      username:"Pauline"
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}></UserOutput>
        <UserInput click={this.changeUsernameHandler}></UserInput>
      </div>
    );
  }
}

export default App;
