import { useState } from "react";
import { NoteList } from "./components/NoteList";
import "./assets/App.css";

export function App() {
  const [notes, setNotes] = useState([
    {
      id: crypto.randomUUID(),
      text: "hello (again)",
      lastModified: Date.now(),
      isActive: false,
    },
  ]);

  function handleRemoveNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return <NoteList notes={notes} onRemoveNote={handleRemoveNote} />;
}
