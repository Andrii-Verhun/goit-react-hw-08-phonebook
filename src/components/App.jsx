import css from './App.module.css';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Form />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
}