import { getLocaleDateString } from "../utils/formatDate";
import "../assets/NoteList.css";

export function NoteList({ notes, onRemoveNote }) {
  return (
    <>
      <ul className="note-list">
        {notes.map((note) => (
          <Note key={note.id} note={note} onRemove={onRemoveNote} />
        ))}
      </ul>
    </>
  );
}

function Note({ note, onRemove }) {
  function handleRemove() {
    onRemove(note.id);
  }

  return (
    <li className="note">
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
