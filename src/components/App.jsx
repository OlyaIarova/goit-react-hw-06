import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { ContactForm } from './ContactForm/ContactForm';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contactCards, setContactCards] = useState(
    localStorage.getItem('cards') !== null
      ? JSON.parse(localStorage.getItem('cards'))
      : contacts
  );

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(contactCards));
  }, [contactCards]);

  const [inputValue, setInputValue] = useState('');

  const handleDelete = id => {
    setContactCards(oldCards => oldCards.filter(card => card.id !== id));
  };

  const handleFilter = evt => {
    setInputValue(evt.target.value);
  };

  const addContactCard = newCard => {
    setContactCards(cards => {
      return [...cards, newCard];
    });
  };

  const activeCards = contactCards.filter(item =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={CSS.container}>
      <h1 className="header">Phonebook 📘 </h1>
      <ContactForm addContactCard={addContactCard} />
      <h2 className="header">Contacts 📝</h2>
      <SearchBar inputValue={inputValue} handleFilter={handleFilter} />
      <ContactList contacts={activeCards} handleDelete={handleDelete} />
    </div>
  );
};
