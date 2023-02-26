import React,{useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io"
import {RiDeleteBin6Line} from "react-icons/ri"


function EditNote({notes, setNotes}) {
  const {id} = useParams();
  const note = notes.find(note => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const date = new Date();
  const navigate = useNavigate();
  
  function handleTextChange(event) {
    setText(event.target.value);
  }
  
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    if(title && text){
      const currentNote = notes.findIndex((note) => note.id === id);
      const updatedNote = Object.assign({}, notes[currentNote])
      updatedNote.title = title;
      updatedNote.text = text;
      updatedNote.date = date.toLocaleDateString();
      const newNotes = notes.slice();
      newNotes[currentNote] = updatedNote;
      setNotes(newNotes);
    }
    
    navigate("/")
  }
  
  const handleDelete = () => {
    const newNotes = notes.filter(notes => notes.id !== id)
    setNotes(newNotes);
    navigate("/");
  }

  return (
    <div className="max-w-[960px] ml-auto mr-auto px-4">
      <section className="my-2 bg-slate-200 rounded-lg">
        <header className="flex justify-between py-3 px-5" >
          <Link to="/" className="text-white bg-slate-400 p-3 rounded-lg shadow-lg" >
            <IoIosArrowBack className="text-2xl" />
          </Link>
          <div className="flex items-center gap-x-2">
            <button className="text-white  bg-blue-600 p-3 rounded-lg shadow-lg" onClick={handleUpdate} >Save</button>
            <button className="text-white  bg-red-600 p-3 rounded-lg shadow-lg" onClick={handleDelete} >
              <RiDeleteBin6Line className="text-2xl" />
            </button>
          </div>
        </header>
        <form className="flex flex-col py-3 px-5" onSubmit={handleUpdate}>
          <input 
            type="text" 
            value={title}
            onChange={handleTitleChange}
            className="bg-transparent outline-none text-2xl px-4" autoFocus />
          <textarea 
            rows="18" 
            value={text}
            onChange={handleTextChange}
            className="bg-transparent outline-none text-lg mt-6 px-4 resize-none"
          ></textarea>
        </form>
      </section>
    </div>
  );
}

export default EditNote;