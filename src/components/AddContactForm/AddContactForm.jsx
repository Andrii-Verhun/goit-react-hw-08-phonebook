import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import css from './AddContactForm.module.css';

export const AddContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const checkingForMatches = (value) => {
        return (
        contacts.some((el) => (el.name.toLowerCase() === value.toLowerCase()))
        )
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        const { target: { name, number } } = evt;

        if (checkingForMatches(name.value)) {
        alert(`${name.value} is already in contacts`);
        return
        };

        dispatch(addContact({name: name.value, number: number.value}));

        name.value = '';
        number.value = '';
    };

    return <form
        className={css.form}
        onSubmit={handleSubmitForm}
    >
        <label className={css.label} htmlFor="name">Name</label>
        <input
            className={css.input}
            type="text"
            name="name"
            id='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        <label className={css.label} htmlFor="number">Number</label>
        <input
            className={css.input}
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <button className={css.button} type='submit'>Add contact</button>
    </form>
};