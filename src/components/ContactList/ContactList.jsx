import { Contact } from '../Contact/Contact';
import CSS from './ContactList.module.css';

export function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={CSS.contact}>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
