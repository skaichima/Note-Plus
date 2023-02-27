import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import {nanoid} from "nanoid";

function CreateNote({setNotes}) {
  
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const date = new Date();
  const navigate = useNavigate();
  
  function handleTextChange(event) {
    setText(event.target.value);
  }
  
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(title && text){
      const note = {id: nanoid(),
        title: title,
        text: text,
        date: date.toLocaleDateString(),
      }
      setNotes((prevNotes) => [...prevNotes, note])
      navigate("/")
    }

  }

  return (
    <div className="max-w-[960px] ml-auto mr-auto px-4">
      <section className="my-2 bg-slate-200 rounded-lg">
        <header className="flex justify-between py-3 px-5" >
          <Link to="/" className="text-white bg-slate-400 p-3 rounded-lg shadow-lg" >
            <IoIosArrowBack className="text-2xl" />
          </Link>
          <button className="text-white  bg-slate-400 p-3 rounded-lg shadow-lg" onClick={handleSubmit} >Save</button>
        </header>
        <form className="flex flex-col py-3 px-5" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Title..."
            value={title}
            onChange={handleTitleChange} 
            className="bg-transparent outline-none text-2xl px-4" 
            autoFocus 
          />
          <textarea 
            rows="18" 
            placeholder="Note details..."
            value={text}
            onChange={handleTextChange} 
            className="bg-transparent outline-none text-lg mt-6 px-4 resize-none"
          ></textarea>
        </form>
      </section>
    </div>
  );
}

export default CreateNote;