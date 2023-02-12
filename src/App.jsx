import { useStorageState } from "./hooks/useStorageState";
import { useStorageReducer, notesReducer } from "./hooks/useStorageReducer";
import { Toolbar } from "./components/Toolbar";
import { SearchForm } from "./components/SearchForm";
import { NoteList } from "./components/NoteList";
import { EditDialog } from "./components/EditDialog";
import "./assets/App.css";

export function App() {
  const [notes, dispatchNotes] = useStorageReducer("notes", notesReducer, [
    {
      id: crypto.randomUUID(),
      text: "hello (again)",
      lastModified: Date.now(),
      isActive: false,
    },
  ]);
  const [keyword, setKeyword] = useStorageState("keyword", "");
  const filterNotes = notes.filter((note) => note.text.toLowerCase().includes(keyword.toLowerCase()));
  const activeNote = filterNotes.find((note) => note.isActive);

  function handleAddNote() {
    dispatchNotes({
      type: "add",
      id: crypto.randomUUID(),
      lastModified: Date.now(),
    });
  }

  function handleRemoveNote(id) {
    dispatchNotes({
      type: "remove",
      id,
    });
  }

  function handleUpdateNote(note) {
    dispatchNotes({
      type: "update",
      note,
    });
  }

  function handleDnDnote(startIndex, endIndex) {
    dispatchNotes({
      type: "dnd",
      startIndex,
      endIndex,
    });
  }

  return (
    <>
      <Toolbar onebtn="add" anotherbtn="light_mode" onOneClick={handleAddNote} />
      <SearchForm keyword={keyword} onSearch={setKeyword} />
      <NoteList
        notes={filterNotes}
        onRemoveNote={handleRemoveNote}
        onUpdateNote={handleUpdateNote}
        onDnDnote={handleDnDnote}
      />
      <EditDialog activeNote={activeNote} onUpdateNote={handleUpdateNote} />
    </>
  );
}
