import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <p>{name}: {number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact