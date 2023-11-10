import axios from 'axios';

const instance = axios.create({
  baseURL: '  ',
});
export const requestContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const requestaddContact = async newcontact => {
  const { data } = await instance.post('/contacts', newcontact);
  return data;
};

export const requestdeleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
