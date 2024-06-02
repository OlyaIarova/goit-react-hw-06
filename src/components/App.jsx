import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { ContactForm } from './ContactForm/ContactForm';


export const App = () => {
  return (
    <div className={CSS.container}>
      <h1 className="header">Phonebook 📘 </h1>
      <ContactForm />
      <h2 className="header">Contacts 📝</h2>
      <SearchBar/>
      <ContactList/>
    </div>
  );
};
