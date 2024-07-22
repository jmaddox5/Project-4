import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import NewNote from "./NewNote";
import NoteDetail from "./NoteDetail";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Notes App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new-note">New Note</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-note" element={<NewNote />} />
            <Route path="/note/:id" element={<NoteDetail />} />
          </Routes>
        </main>
        <footer>
          <p>
          Check out the code behind this website on
          <a href="https://github.com/jmaddox5/Project-4"> GitHub</a>.
          </p>
        </footer>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
