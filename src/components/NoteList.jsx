import React from 'react';
import Note from './Note';

function NotesList({notes}) {
    return(
        <div className="note-list">
            {notes.slice(0).reverse().map(note => (
                <Note key={note.id} id={note.id} title={note.title} date={note.date}/>
            ))}
        </div>
    )
}

export default NotesList;