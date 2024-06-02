import CSS from './Contact.module.css';
import { useDispatch } from 'react-redux';
import {removeContact} from '../../redux/contactSlice'

export function Contact({ name, number, id }) {
  const dispatch = useDispatch();
 
  const handleDelete = id => {
    dispatch(removeContact(id));
  };
  return (
    <li className={CSS.listItem}>
      <h2 className={CSS.title}>{name}</h2>
      <p className={CSS.title}>{number}</p>
      <button
        type="button"
        className={CSS.button}
        onClick={() => handleDelete(id)}
      >
        Delete contact
      </button>
    </li>
  );
}
