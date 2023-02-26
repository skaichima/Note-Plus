import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes"
import EditNote from "./Pages/EditNote";
import CreateNote from "./Pages/CreateNote";
import { useState, useEffect } from "react";


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes notes={notes} setNotes={setNotes} />} />
        <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
        <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;