import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get(
    'https://648d7fab2de8d0ea11e7e842.mockapi.io/contacts'
  );
  return data;
};

export const addContacts = async post => {
  const { data } = await axios.post(
    'https://648d7fab2de8d0ea11e7e842.mockapi.io/contacts',
    post
  );
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://648d7fab2de8d0ea11e7e842.mockapi.io/contacts/${id}`
  );
  return data;
};
