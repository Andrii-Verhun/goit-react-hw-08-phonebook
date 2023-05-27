import css from './Contacts.module.css'

import { AddContactForm } from '../../components/AddContactForm/AddContactForm';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { Filter } from '../../components/Filter/Filter';

export const Contacts = () => {
    return (
        <div>
            <h1 className={css.title}>Phonebook</h1>
            <AddContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactsList />
        </div>
    );
};