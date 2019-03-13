import React from 'react';
import IdeaCard from './IdeaCard';

export default function IdeaContainer({ ideas, removeIdea }) {
    // if (ideas) {
    //     var displayIdeas = ideas.map((idea) => {
    //         return <IdeaCard key={idea.id} {...idea} />
    //     })
    // }
    const displayIdeas = ideas.map((idea) => (
        <IdeaCard key={idea.id} {...idea} removeIdea={removeIdea}/>
    ))
    return (
        <div>
            { displayIdeas }
        </div>
    )
}