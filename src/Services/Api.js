import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://654cc59577200d6ba8596495.mockapi.io/',
});

export const requestContacts = async () => {
  try {
    const { data } = await instance.get('/contacts');
    return data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
};
export const requestaddContact = async newcontact => {
  const { data } = await instance.post('/contacts', newcontact);
  return data;
};

export const requestdeleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
