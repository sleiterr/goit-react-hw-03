import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.SearchBox}>
      <label className={ styles.LabelBox} htmlFor="search">Find contacts by name</label>
      <input className={ styles.BoxInput}
        type="text"
        name='search'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox