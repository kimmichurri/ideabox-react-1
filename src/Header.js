import React from 'react';
import Search from './Search';

export default function Header() {
    return (
        <section className="header-container">
            <h1 className='app-name'><span className='app-name-color-accent'>ideabox</span>triples</h1>
            <Search />
        </section>
    )
}