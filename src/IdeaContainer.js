import React from 'react';
import IdeaCard from './IdeaCard';

export default function IdeaContainer({ ideas }) {
    // if (ideas) {
    //     var displayIdeas = ideas.map((idea) => {
    //         return <IdeaCard key={idea.id} {...idea} />
    //     })
    // }
    const displayIdeas = ideas.map((idea) => (
        <IdeaCard key={idea.id} {...idea} />
    ))
    return (
        <div>
            { displayIdeas }
        </div>
    )
}