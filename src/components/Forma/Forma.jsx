import { useState } from 'react';
import { Input, FormBtn } from './Forma.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/sliceContact';

export const Forma = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const addContacts = (name, number) => {
    const contact = {
      name,
      number,
    };
    dispatch(addContactThunk(contact));
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const nameContacts = contacts.map(el => el.name.toLowerCase());
    if (nameContacts.includes(name.toLowerCase())) {
      alert(`${name} is in your contacts`);
    } else {
      addContacts(name, number);
      reset();
    }
  };

  const hendleNameTelChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={hendleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={hendleNameTelChange}
          />
        </label>

        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={hendleNameTelChange}
          />
        </label>
        <FormBtn type="submit">Add contact</FormBtn>
      </form>
    </>
  );
};
