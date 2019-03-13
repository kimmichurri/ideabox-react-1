import React from 'react';

export default function IdeaCard({ ideaTitle, ideaBodyText, id, removeIdea}) {

    return (
        <section>
            <h3>{ ideaTitle }</h3>
            <p>{ ideaBodyText }</p>
            <button onClick={()=> removeIdea(id)}>x</button>
        </section>
    )
}