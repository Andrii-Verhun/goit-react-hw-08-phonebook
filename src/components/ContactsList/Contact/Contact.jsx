import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import css from './Contact.module.css';

export const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContact(id));
    };

    return (
        <li className={css.item}>
            <p className={css.contact}>{name}: {number}</p>
            <button
                className={css.button}
                onClick={handleDeleteContact}
                type='button'
            >Delete
            </button>
        </li>
    )
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};