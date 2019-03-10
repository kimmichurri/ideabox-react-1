import React, { Component } from 'react';
import './scss/_App.scss';
import Header from './Header';
import IdeaForm from './IdeaForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <IdeaForm />
      </div>
    );
  }
}

export default App;
