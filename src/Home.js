import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const deleteNote = (id) => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = storedNotes.filter((n) => n.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  return (
    <div className="home">
      <h2>All Notes</h2>
      {notes
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((note) => (
          <div key={note.id} className="note">
            <Link to={`/note/${note.id}`}>
              <h3>{note.title}</h3>
            </Link>
            <p>{new Date(note.date).toLocaleString()}</p>
            <button onClick={() => navigate(`/note/${note.id}`)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default Home;
