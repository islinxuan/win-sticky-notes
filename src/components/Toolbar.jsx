import "../assets/Toolbar.css";

export function Toolbar({ onebtn, anotherbtn, onOneClick, onAnotherClick }) {
  return (
    <div className="toolbar">
      <button type="button" onClick={onOneClick}>
        <span className="material-symbols-rounded text-4xl">{onebtn}</span>
      </button>
      <button type="button" onClick={onAnotherClick}>
        <span className="material-symbols-rounded p-1">{anotherbtn}</span>
      </button>
    </div>
  );
}
