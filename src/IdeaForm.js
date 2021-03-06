import React, { Component } from 'react';

export default class IdeaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideaTitle: "",
            ideaBodyText: ""
        }
    }

    updateIdeaTitle = (e) => {
        e.preventDefault();
        this.setState({
            ideaTitle: (e.target.value)
        })
    }

    updateIdeaBody = (e) => {
        e.preventDefault();
        this.setState({
            ideaBodyText: (e.target.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addIdea(this.state)
    }

    render() {
        return (
            <section className="idea-form">
                <form className="idea-inputs" onSubmit={this.handleSubmit}>
                    <label 
                        htmlFor="form-idea-title">Title
                    </label>
                    <input 
                        className="user-idea-inputs user-idea-title" 
                        type="text" 
                        value={this.state.ideaTitle} 
                        onChange={this.updateIdeaTitle}
                        id="form-idea-title">
                    </input>
                    <label 
                        htmlFor="form-idea-body">Body
                    </label>
                    <textarea 
                        className="user-idea-inputs user-idea-body" 
                        type="text" 
                        value={this.state.ideaBodyText} 
                        onChange={this.updateIdeaBody}
                        id="form-idea-body">
                    </textarea>
                    <button className="save-idea-button">Save</button>
                </form>
                {/* {this.props.ideas.length > 0 && (
                    <IdeaCard 
                        ideaTitle={this.state.ideaTitle}
                        ideaBodyText={this.state.ideaBodyText}
                    />
                )} */}
            </section>
        )
    }
}
