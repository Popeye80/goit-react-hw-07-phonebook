import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter, getFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="name" className={styles.label}>
        Find contact by name:
      </label>
      <input
        className={styles.input}
        onChange={event => dispatch(updateFilter(event.target.value))}
        value={filter}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

export default Filter;
