import { getLocaleDateString } from "../utils/formatDate";
import "../assets/NoteList.css";

export function NoteList({ notes, onRemoveNote, onUpdateNote }) {
  return (
    <>
      <ul className="note-list">
        {notes.map((note) => (
          <Note key={note.id} note={note} onRemove={onRemoveNote} onUpdate={onUpdateNote} />
        ))}
      </ul>
    </>
  );
}

function Note({ note, onRemove, onUpdate }) {
  function handleRemove(e) {
    e.stopPropagation();
    onRemove(note.id);
  }

  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <li className="note" onClick={() => onUpdate({ ...note, isActive: true })}>
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
