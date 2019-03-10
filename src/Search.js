import React, { Component } from 'react';

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            currentSearchText: "",
        }
    }

    render() {
        return (
            <section className="search-field-container">
                <input className='search-input' type="search" placeholder="Search"></input>
                <button className='icon-search-button'>Search</button>
            </section>
        )
    }
}
