import React from 'react';
import Note from './Note';
import { Component } from 'react';

class NotesList extends Component  {
    render() {
        return(
            <div className="note-list">
                {this.props.notes.slice(0).reverse().map(note => (
                    <Note key={note.id} id={note.id} title={note.title} date={note.date}/>
                ))}
            </div>
        )
    }
}

export default NotesList;