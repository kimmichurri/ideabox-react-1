import React, { Component } from 'react';
import './scss/_App.scss';
import Header from './Header';
import IdeaForm from './IdeaForm';
import IdeaContainer from './IdeaContainer';

class App extends Component {
  constructor() {
    super();
      this.state = {
        ideas: []
      }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    this.setState({
      ideas: [...this.state.ideas, newIdea]
    })
  }

  removeIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter((idea) => idea.id !== id)
    this.setState({ ideas: filteredIdeas})
  }


  render() {
    const { ideas } = this.state
    return (
      <div className="App">
      <Header />
      <IdeaForm ideas={ideas} addIdea={this.addIdea}/>
      <IdeaContainer ideas={ideas} removeIdea={this.removeIdea}/>
      </div>
    );
  }
}

export default App;
