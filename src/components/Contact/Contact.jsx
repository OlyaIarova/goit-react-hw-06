import CSS from './Contact.module.css';

export function Contact({ name, number, id, handleDelete }) {
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
