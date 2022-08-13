import styles from './ContactListItem.module.css';
import { ReactComponent as DelBtn } from '../../../icons/del.svg';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import Spiner from 'components/Spiner';

const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <p className={styles.text}>
        <span className={styles.text__name}>{name}:</span> {phone}
      </p>
      <button
        className={styles.delBtn}
        onClick={() => deleteContact(id)}
        type="button"
      >
        {isLoading ? (
          <div className={styles.wrapper}>
            <span className={styles.delText}>Delete</span>
            <Spiner width={16} height={16} color="white" />
          </div>
        ) : (
          <>
            <span> Delete</span>
            <DelBtn className={styles.delBtnIcon} />
          </>
        )}
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
