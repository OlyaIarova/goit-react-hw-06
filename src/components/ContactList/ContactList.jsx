import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts, getFilter } from '../../redux/selectors';
import CSS from './ContactList.module.css';

export function ContactList() {
   const storedContacts = useSelector(getContacts);
   const filterValue = useSelector(getFilter);

   const contacts = storedContacts.filter(contact =>
     contact.name.toLowerCase().includes(filterValue)
   );

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
          />
        );
      })}
    </ul>
  );
}
