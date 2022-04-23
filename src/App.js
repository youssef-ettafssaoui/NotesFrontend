import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotesList from "./components/NotesList";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" component={NotesList} />
            <Route exact path="*" component={NotFound} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
