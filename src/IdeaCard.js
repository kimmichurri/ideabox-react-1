import React from 'react';

export default function IdeaCard({ ideaTitle, ideaBodyText, id}) {

    return (
        <section>
            <h3>{ ideaTitle }</h3>
            <p>{ ideaBodyText }</p>
            <button>x</button>
        </section>
    )
}