import React,{useState} from "react";
import { Link } from "react-router-dom";
import NotesList from "../components/NoteList";
import Search from "../components/Search";
import Header from "../components/Header";
import {BsPlusLg} from "react-icons/bs";

function Notes({notes}) {
  const [searchText, setSearchText] = useState("");
  const filteredNotes = notes.filter((note) =>  note.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="max-screen relative h-screen ml-auto mr-auto px-4">
      <Header />
      <Search handleSearchNote={setSearchText} />
      {filteredNotes.length === 0 && <p className="w-full h-4/5 flex items-center justify-center">No Notes Found</p>}
      <NotesList 
        notes={filteredNotes}
      />
      <Link className="fixed right-8 bottom-24 bg-slate-400 p-4 rounded-lg shadow-lg" to="/create-note">
        <BsPlusLg className="text-white md:text-3xl" />
      </Link>
    </div>
  );
}

export default Notes;