import { useReducer, useEffect } from "react";

export function useStorageReducer(key, reducer, init) {
  const storageItem = localStorage.getItem(key);
  const [value, dispatchValue] = useReducer(reducer, storageItem ? JSON.parse(storageItem) : init);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, dispatchValue];
}

export function notesReducer(notes, action) {
  switch (action.type) {
    case "add": {
      return [
        ...notes,
        {
          id: action.id,
          text: "",
          lastModified: action.lastModified,
          isActive: true,
        },
      ];
    }
    case "update": {
      return notes.map((note) => {
        if (note.id === action.note.id) {
          return action.note;
        } else {
          return note;
        }
      });
    }
    case "remove": {
      return notes.filter((note) => note.id !== action.id);
    }
    case "dnd": {
      const _notes = [...notes];
      const draggedNote = _notes.splice(action.startIndex, 1);
      _notes.splice(action.endIndex, 0, ...draggedNote);
      return _notes;
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}
