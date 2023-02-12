import { useEffect, useRef } from "react";
import "../assets/EditDialog.css";

export function EditDialog({ activeNote, onUpdateNote }) {
  const dialogRef = useRef();
  const toggle = activeNote?.isActive;

  useEffect(() => {
    if (toggle) {
      dialogRef.current.showModal();
    }
  }, [toggle]);

  function handleChange(newText) {
    onUpdateNote({
      ...activeNote,
      text: newText,
      lastModified: Date.now(),
    });
  }

  function handleClose() {
    onUpdateNote({
      ...activeNote,
      isActive: false,
    });
  }

  return (
    <dialog className="editor" ref={dialogRef} onClose={handleClose}>
      <form method="dialog">
        <div className="editor-toolbar">
          <button type="submit" value="done">
            <span className="material-symbols-rounded p-1">done</span>
          </button>
          <button type="button">
            <span className="material-symbols-rounded p-1">more_horiz</span>
          </button>
        </div>
        <textarea placeholder="记笔记……" value={activeNote?.text} onChange={(e) => handleChange(e.target.value)} />
      </form>
    </dialog>
  );
}
