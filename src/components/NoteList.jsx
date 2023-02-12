import { useRef } from "react";
import { getLocaleDateString } from "../utils/formatDate";
import "../assets/NoteList.css";

export function NoteList({ notes, onRemoveNote, onUpdateNote, onDnDnote }) {
  const dragNoteRef = useRef(null);
  const dragOverNoteRef = useRef(null);

  function handleDragNote() {
    onDnDnote(dragNoteRef.current, dragOverNoteRef.current);

    dragNoteRef.current = null;
    dragOverNoteRef.current = null;
  }

  return (
    <>
      <ul className="note-list">
        {notes.map((note, index) => (
          <Note
            key={note.id}
            note={note}
            index={index}
            onRemove={onRemoveNote}
            onUpdate={onUpdateNote}
            dragNoteRef={dragNoteRef}
            dragOverNoteRef={dragOverNoteRef}
            onDragNote={handleDragNote}
          />
        ))}
      </ul>
    </>
  );
}

function Note({ note, index, onRemove, onUpdate, dragNoteRef, dragOverNoteRef, onDragNote }) {
  function handleRemove(e) {
    e.stopPropagation();
    onRemove(note.id);
  }

  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <li
      className="note"
      onClick={() => onUpdate({ ...note, isActive: true })}
      draggable="true"
      onDragStart={() => (dragNoteRef.current = index)}
      onDragEnter={() => (dragOverNoteRef.current = index)}
      onDragEnd={onDragNote}
      onDragOver={(e) => e.preventDefault()}
    >
      <p className="note-main">{note.text}</p>
      <div className="note-footer">
        <time>{getLocaleDateString(note.lastModified)}</time>
        <button type="button" onClick={handleRemove}>
          <span className="material-symbols-rounded text-xl">remove</span>
        </button>
      </div>
    </li>
  );
}
