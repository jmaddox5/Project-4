import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const addNote = () => {
    const newNote = { id: uuidv4(), title, content, date: new Date() };
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    storedNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(storedNotes));
    navigate("/");
  };

  return (
    <div className="new-note">
      <h2>Add New Note</h2>
      <div>
        <label>Note Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Note Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={addNote}>Add Note</button>
    </div>
  );
}

export default NewNote;
