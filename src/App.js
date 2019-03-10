import React, { Component } from 'react';
import './scss/_App.scss';
import Header from './Header';
import IdeaForm from './IdeaForm';

class App extends Component {
  constructor() {
    super();
      this.state = {
        ideaCards: []
      }
  }
  render() {
    return (
      <div className="App">
      <Header />
      <IdeaForm ideaCards={this.state.ideaCards}/>
      </div>
    );
  }
}

export default App;
