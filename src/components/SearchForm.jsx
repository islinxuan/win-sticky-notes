import "../assets/SearchForm.css";

export function SearchForm({ keyword, onSearch }) {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="q">便笺</label>
      <input
        type="text"
        id="q"
        name="q"
        placeholder="搜索……"
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button type="submit">
        <span className="material-symbols-rounded">search</span>
      </button>
    </form>
  );
}
