import React, { Component } from 'react';
import './scss/_App.scss';
import Header from './Header';
import IdeaForm from './IdeaForm';
import IdeaContainer from './IdeaContainer';

class App extends Component {
  constructor() {
    super();
      this.state = {
        ideaCards: []
      }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    this.setState({
      ideaCards: [...this.state.ideaCards, newIdea]
    })
  }


  render() {
    const { ideaCards } = this.state
    return (
      <div className="App">
      <Header />
      <IdeaForm ideaCards={ideaCards} addIdea={this.addIdea}/>
      <IdeaContainer ideacards={ ideaCards } />
      </div>
    );
  }
}

export default App;
