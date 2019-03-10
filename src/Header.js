import React from 'react';
import Search from './Search';

export default function Header() {
    return (
        <div>
            <h1 className='app-name'>IdeaBox<span className='app-name-color-accent'>Triples</span></h1>
            <Search />
        </div>
    )
}