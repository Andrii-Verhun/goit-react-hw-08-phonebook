import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { getFilterValue } from 'redux/selectors';

import { Contact } from './Contact/Contact';

import css from './ContactsList.module.css';

export const ContactsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterValue);

    const filteredContacts = useMemo(() => {
    return contacts.filter((el) => (el.name.toLowerCase().includes(filter.toLowerCase())));
  }, [contacts, filter]);

    return (
        <div className={css.wrapper}>
            <ul>
                {filteredContacts.map((el) => (
                    <Contact
                        key={el.id}
                        name={el.name}
                        number={el.phone}
                        id={el.id}
                    />)
                )}
            </ul>
        </div>
    );
};