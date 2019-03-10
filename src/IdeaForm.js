import React, { Component } from 'react';

export default class IdeaForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="idea-form">
                <form method="get">
                    <label for="form-idea-title">Title</label>
                    <input className="user-idea-inputs user-idea-title" type="text" id="form-idea-title"></input>
                    <label for="form-idea-body">Body</label>
                    <input className="user-idea-inputs user-idea-body" type="text" id="form-idea-body"></input>
                    <button className="save-idea-button">Save</button>
                </form>
            </section>
        )
    }
}
