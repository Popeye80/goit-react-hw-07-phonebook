import ContactForm from './ContactForm';
import ContactList from './ContactList';
import EmptyMessage from './EmptyMessage';
import Filter from './Filter';
import Spiner from './Spiner';

import { useGetContactsQuery } from 'redux/contactsApi';

export function App() {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <div className="wrapper">
      <div className="header-section">
        <h1>Phonebook</h1>
      </div>
      <div className="main-section">
        <ContactForm />
        <div className="contacts-section">
          <h2 className="page-title">Your contacts</h2>
          {isLoading && <Spiner width={50} height={50} color="blue" />}
          {data && data.length > 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            !isLoading && <EmptyMessage />
          )}
        </div>
      </div>
    </div>
  );
}
