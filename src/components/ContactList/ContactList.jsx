import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'Redux/contactsSlice';
import { selectContacts, selectFilters } from 'Redux/selector';
import Filter from '../Filter/Filter';
import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name?.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number?.includes(filter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const removeContactById = id => {
    const contactId = id;
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.filterBox}>
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <li className={css.contactslistItem} key={contact.id}>
            {contact.name}: {contact.phone}
            <button
              className={css.contactslistBtn}
              type="button"
              onClick={() => removeContactById(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
