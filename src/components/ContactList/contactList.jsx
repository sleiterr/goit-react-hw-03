import Contact from './Contact/ContactList';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} onDelete={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;