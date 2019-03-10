import React, { Component } from 'react';
import IdeaCard from './IdeaCard'
export default class IdeaForm extends Component {
    constructor() {
        super();
        this.state = {
            ideaTitle: "",
            ideaBodyText: ""
        }
    }

    updateIdeaTitle = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            ideaTitle: (e.target.value)
        })
    }

    updateIdeaBody = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            ideaBodyText: (e.target.value)
        })
    }

    submitNewIdea(e) {
        e.preventDefault();
    }

    render() {
        return (
            <section className="idea-form">
                <form className="idea-inputs" method="get">
                    <label htmlFor="form-idea-title">Title</label>
                    <input 
                        className="user-idea-inputs user-idea-title" 
                        type="text" 
                        value={this.state.ideaTitle} 
                        onChange={this.updateIdeaTitle}
                        id="form-idea-title">
                    </input>
                    <label htmlFor="form-idea-body">Body</label>
                    <textarea 
                        className="user-idea-inputs user-idea-body" 
                        type="text" 
                        value={this.state.ideaBodyText} 
                        onChange={this.updateIdeaBody}
                        id="form-idea-body">
                    </textarea>
                    <button onClick={this.submitNewIdea} className="save-idea-button">Save</button>
                </form>
                {this.props.ideaCards.length > 0 && (
                    <IdeaCard />
                )}
            </section>
        )
    }
}
