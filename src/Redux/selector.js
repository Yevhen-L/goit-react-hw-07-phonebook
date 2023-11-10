export const selectContacts = state => {
  return state.contacts.items;
};

export const selectFilters = state => {
  return state.contacts.filter;
};
