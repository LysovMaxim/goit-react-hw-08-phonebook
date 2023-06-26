import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get(
    `https://connections-api.herokuapp.com/contacts`
  );
  return data;
};

export const addContacts = async post => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/contacts',
    post
  );
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://connections-api.herokuapp.com/contacts/${id}`
  );
  return data;
};


