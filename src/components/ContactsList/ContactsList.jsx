import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RotatingLines } from 'react-loader-spinner';

import { selectIsLoadingContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilterValue } from 'redux/filter/selectors';

import { Contact } from './Contact/Contact';

import css from './ContactsList.module.css';

export const ContactsList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilterValue);
    const isLoading = useSelector(selectIsLoadingContacts);
    
    const filteredContacts = useMemo(() => {
    return contacts.filter((el) => (el.name.toLowerCase().includes(filter.toLowerCase())));
  }, [contacts, filter]);

    return isLoading ? (<div className={css.rotatingWrapper}>
                <RotatingLines
                    strokeColor="#7290f0"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="30"
                    visible={isLoading}
                />
            </div>) : (<div className={css.wrapper}>
            <ul>
                {filteredContacts.map((el) => (
                    <Contact
                        key={el.id}
                        name={el.name}
                        number={el.number}
                        id={el.id}
                    />)
                )}
            </ul>
        </div>);
};