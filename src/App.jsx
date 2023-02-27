import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes"
import EditNote from "./Pages/EditNote";
import CreateNote from "./Pages/CreateNote";
import { useState, useEffect, Component } from "react";


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return (
    <BrowserRouter basename='/Note-Plus'>
      <Routes>
        <Route path="/" element={<Notes notes={notes} setNotes={setNotes} />} />
        <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
        <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
      </Routes>
    </BrowserRouter>
  );
}

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       notes: JSON.parse(localStorage.getItem('notes')) || []
//     }
//   }

//   // useEffect(() => {
//   //   localStorage.setItem("notes", JSON.stringify(notes));
//   // }, [notes]);

//   render() {
//     return (
//       <BrowserRouter basename='/Note-Plus'>
//         <Routes>
//           <Route path="/" element={<Notes notes={this.state.notes} setNotes={setNotes} />} />
//           <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
//           <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

export default App;