import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.SearchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name='search'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox