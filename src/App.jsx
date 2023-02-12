import { useState } from "react";
import { Toolbar } from "./components/Toolbar";
import { SearchForm } from "./components/SearchForm";
import { NoteList } from "./components/NoteList";
import { EditDialog } from "./components/EditDialog";
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
  const [keyword, setKeyword] = useState("");
  const filterNotes = notes.filter((note) => note.text.toLowerCase().includes(keyword.toLowerCase()));
  const activeNote = filterNotes.find((note) => note.isActive);

  function handleAddNote() {
    const newNote = {
      id: crypto.randomUUID(),
      text: "",
      lastModified: Date.now(),
      isActive: true,
    };
    setNotes([newNote, ...notes]);
  }

  function handleRemoveNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleUpdateNote(updatedNote) {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArr);
  }

  return (
    <>
      <Toolbar onebtn="add" anotherbtn="light_mode" onOneClick={handleAddNote} />
      <SearchForm keyword={keyword} onSearch={setKeyword} />
      <NoteList notes={filterNotes} onRemoveNote={handleRemoveNote} onUpdateNote={handleUpdateNote} />
      <EditDialog activeNote={activeNote} onUpdateNote={handleUpdateNote} />
    </>
  );
}
