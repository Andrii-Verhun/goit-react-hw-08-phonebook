import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { RotatingLines } from 'react-loader-spinner';

import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


import { deleteContact } from 'redux/contacts/operations';

import css from './Contact.module.css';

export const Contact = ({ name, number, id }) => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContact(id));
        setIsLoading(true);
        Notify.success('Contact removed.')
    };

    return (
        <li className={css.item}>
            <p className={css.contact}>{name}: {number}</p>
            <button
                className={css.button}
                onClick={handleDeleteContact}
                type='button'
            >Delete
            {<RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="15"
                visible={isLoading}
            />}
            </button>
        </li>
    )
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};