import React from 'react';
import IdeaCard from './IdeaCard';

export default function IdeaContainer({ ideaCards }) {
    if (ideaCards) {
        var displayIdeas = ideaCards.map((idea) => {
            return <IdeaCard key={idea.id} {...idea} />
        })
    }
    return (
        <div>
            { displayIdeas }
        </div>
    )
}