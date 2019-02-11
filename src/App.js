import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username:"PaulineF"
  }

  switchUsernameHandler = (newName) => {
    this.setState( {
      username: newName
    });
  }

  changeUsernameHandler = (event) => {
    this.setState( {
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}></UserOutput>
        <UserInput changed={this.changeUsernameHandler} click={this.switchUsernameHandler.bind(this, 'Pauline!')}></UserInput>
      </div>
    );
  }
}

export default App;
