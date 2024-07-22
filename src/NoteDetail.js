import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function NoteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const note = storedNotes.find((n) => n.id === id);
    if (note) {
      setNote(note);
      setTitle(note.title);
      setContent(note.content);
    }
  }, [id]);

  const saveNote = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = storedNotes.map((n) =>
      n.id === id ? { ...n, title, content } : n
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNote({ ...note, title, content });
    setIsEditing(false);
  };

  const deleteNote = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = storedNotes.filter((n) => n.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate("/");
  };

  return note ? (
    <div className="note-detail">
      <button onClick={() => navigate("/")}>Back</button>
      {isEditing ? (
        <>
          <h2>Edit Note</h2>
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
          <button onClick={saveNote}>Save Note</button>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit Note</button>
          <button onClick={deleteNote}>Delete Note</button>
        </>
      )}
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default NoteDetail;
