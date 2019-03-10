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

    createNewIdea() {
        
    }

    render() {
        return (
            <section className="idea-form">
                <form className="idea-inputs" method="get">
                    <label for="form-idea-title">Title</label>
                    <input className="user-idea-inputs user-idea-title" type="text" id="form-idea-title"></input>
                    <label for="form-idea-body">Body</label>
                    <textarea className="user-idea-inputs user-idea-body" type="text" id="form-idea-body"></textarea>
                    <button onClick={this.createNewIdea} className="save-idea-button">Save</button>
                </form>
                {this.props.ideaCards.length > 0 && (
                    <IdeaCard />
                )}
            </section>
        )
    }
}
