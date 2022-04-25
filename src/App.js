import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotesList from "./components/NotesList";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNote from "./components/AddNote";
import NoteDetails from "./components/NoteDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<NotesList />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="/notes/:id" element={<NoteDetails />} />
            <Route path="/notes/edit/:id" element={<AddNote />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
