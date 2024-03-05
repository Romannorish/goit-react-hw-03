import css from "./SearchBar.module.css";

export default function SearchBar({value, handleSerch}) {
  return (
    <form className={css.formBox}>
      <h2 className={css.title}>Find contacts by name</h2>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          placeholder="user name"
          value={value}
          onChange={(e) => handleSerch(e.target.value)}
        />
      </label>
    </form>
  );
}
