import { useSelector, useDispatch } from 'react-redux';

import { getFilterValue } from 'redux/selectors';
import { filterChange } from 'redux/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilterValue);

    const handleChangeInputFilter = (evt) => {
        const { target: { value } } = evt;
        dispatch(filterChange(value));
    };
    
    return (
        <>
            <label className={css.label} htmlFor="filter">Find contacts by name</label>
            <input
                className={css.input}
                onChange={handleChangeInputFilter}
                value={filter}
                type="text"
                name="filter"
                id='filter'
            />
        </>
    );
};