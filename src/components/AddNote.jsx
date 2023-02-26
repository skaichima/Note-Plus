import React, {useState} from "react";

function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('');

    function handleChange(event) {
        setNoteText(event.target.value);
    }

    function handleSave() {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText("")
        }
    }

    return(
        <div className="bg-blue-400 whitespace-pre-wrap rounded-lg p-4 min-h-[200px] flex flex-col justify-between new">
            <textarea 
                placeholder="Type to add a note..." 
                cols="10" rows="8" 
                className="border-0 resize-none bg-transparent outline-none placeholder:text-gray-800"
                value={noteText}
                onChange={handleChange}
                ></textarea>
            <div className="flex items-center justify-between">
                <small>Character count: {noteText.length}</small>
                <button 
                    className="bg-gray-200 rounded-2xl px-3 py-1 shadow hover:bg-gray-100"
                    onClick={handleSave}
                >Save</button>
            </div>
        </div>
    )
}

export default AddNote;