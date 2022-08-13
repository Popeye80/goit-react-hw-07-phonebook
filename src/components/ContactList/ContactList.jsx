import styles from './ContactList.module.css';
import ContactListItem from './ContactListItem/ContactListItem';

import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';

const ContactList = () => {
  const filter = useSelector(getFilter);

  const { data } = useGetContactsQuery();
  
  const makeFilteredMarkup = () => {
    const lowerCaseFilter = filter.toLocaleLowerCase();
    const filteredArray =
      data &&
      [...data].filter(contact =>
        contact.name.toLocaleLowerCase().includes(lowerCaseFilter)
      );
    return filteredArray;
  };

  const filteredArray = makeFilteredMarkup();

  if (filteredArray.length === 0) {
    return <p className={styles.emptyFilter}>No contact with this name</p>;
  }
  return (
    <ul className={styles.list}>
      {filteredArray.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <ContactListItem id={id} name={name} phone={phone} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
